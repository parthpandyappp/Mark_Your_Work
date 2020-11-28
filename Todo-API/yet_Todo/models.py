from django.db import models

# Create your models here.


class TodoData(models.Model):
    title = models.CharField(max_length=20)
    completed = models.BooleanField()

    def __str__(self):
        return self.title
