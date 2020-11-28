import React from 'react'
import Todo from './Todo'
import Nav from './Nav'

// function based Component
/*function App() {
  const Data = ToDoData.map(details => <Todo det={details} />)
  return (

    <div className="todo-list box">
      {Data}
    </div>

  );
}*/

//Class based Component
class List extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }

    fetchData() {
        fetch('http://localhost:8000/Todo-api/')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    todos: data
                });
            });
    }

    componentDidMount() {
        this.fetchData();
    }

    handleChange(id) {
        console.log("Parth")
        this.setState(prevState => {
            const updatedData = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedData
            }
        })
    }

    currentDate() {
        return new Date().getFullYear();
    }


    render() {
        const Data = this.state.todos.map(details => <Todo key={details.id} det={details} handleChange={this.handleChange} />)

        const someStyle = {
            marginTop: "40px", marginLeft: "100px", marginRight: "100px",
        }
        console.log(this.state.todos)
        return (
            <div>
                <Nav />

                <div className="todo-list box">
                    {Data}
                </div>

                <hr style={someStyle} />

                <p className="text-center" style={{ fontFamily: "Roboto Mono", lineHeight: 0.5 }}>Copyright ©️ {this.currentDate()} Parth Pandya </p>

                <p className="text-center" style={{ fontFamily: "Roboto Mono", fontSize: 10, lineHeight: 0.5 }}>Some rights reserved.</p>
            </div>
        )
    }
}

export default List