import React from 'react'

function ToDoItem({ todo, deleteTodo, toggleTodo }) {
    return (
        <li className='list-group-item d-flex justify-content-between align-items-center'>
            <span >
                <span
                    onClick={() => toggleTodo(todo.id)}
                    style={{
                        cursor: "pointer",
                        textDecoration: todo.completed ? "line-through" : "none"
                    }}
                >
                    {todo.text}
                </span>
            </span>

            <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </li>
    )
}

export default ToDoItem
