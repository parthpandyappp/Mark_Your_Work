import React from 'react'



function Todo(props) {
  const completeStyles = {
    fontStyle: "italic",
    textDecoration: "Line-through",
    color: "gray",
  }

  return (
    <div className="todo-item">
      <input type="checkbox" onChange={() => props.handleChange(props.det.id)} checked={props.det.completed} />
      <p style={props.det.completed ? completeStyles : null}>{props.det.title}</p>
    </div>
  );
}

export default Todo;