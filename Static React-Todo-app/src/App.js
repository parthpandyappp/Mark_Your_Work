import React from 'react'
import Todo from './Components/Todo'
import ToDoData from './Components/ToDoData';
import Nav from './Components/Nav'

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
class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: ToDoData,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
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

export default App