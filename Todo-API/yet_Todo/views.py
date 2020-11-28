from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializers import TodoDataSerializer
from .models import TodoData
# Create your views here.

class Todolist(APIView):
    serializer_class = TodoDataSerializer

    def get(self, request):
        ToDoData = TodoData.objects.all()
        serializer = TodoDataSerializer(ToDoData, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TodoDataSerializer(data=request.data)
        if(serializer.is_valid()):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.data, status=status.HTTP_404_BAD_REQUEST)

class TodoDetail(APIView):
    serializer_class = TodoDataSerializer

    def get(self, request, pk):
        ToDoData = TodoData.objects.get(pk=pk)
        serializer = TodoDataSerializer(ToDoData)
        return Response(serializer.data)

    def delete(self, request, pk):
        ToDoData = TodoData.objects.filter(pk=pk)
        ToDoData.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        snippets = TodoData.objects.get(pk=pk)
        serializer = TodoDataSerializer(snippets, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
