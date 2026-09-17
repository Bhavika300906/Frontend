import ToDoItem from './ToDoItem';

function ToDoList({ todos, deleteTodo,toggleTodo  }) {
    let todoItems = [];

    for (let i = 0; i < todos.length; i++) {
        todoItems.push(
            <ToDoItem
                key={todos[i].id}
                todo={todos[i]}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                
            />
        );
    }
    return (
        <ul className='list-group'>
            {todoItems}
        </ul>
    )
}

export default ToDoList;
