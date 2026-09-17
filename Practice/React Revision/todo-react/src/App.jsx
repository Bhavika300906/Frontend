import { useState } from "react"
import AddtoList from "./Components/AddtoList";
import ToDoList from "./Components/ToDoList";

const App = () => {
  //Add TO DO
  const [todos, setTodos] = useState([]);

  const addToDo = (task) => {
    const newToDo = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  };

  // DELETE TO DO
  const deleteTodo = (id) => {

    let newTodos = [];

    for (let i = 0; i < todos.length; i++) {

      if (todos[i].id !== id) {

        newTodos.push(todos[i]);

      }

    }

    setTodos(newTodos);

  };

  //Toggle 
  const toggleTodo = (id) => {

    let updatedTodos = [];

    for (let i = 0; i < todos.length; i++) {

      if (todos[i].id === id) {

        updatedTodos.push({
          id: todos[i].id,
          text: todos[i].text,
          completed: !todos[i].completed
        });

      } else {

        updatedTodos.push(todos[i]);

      }

    }

    setTodos(updatedTodos);

  };

  // Pending / Completed Counter
  let completed = 0;
  let pending = 0;

  for (let i = 0; i < todos.length; i++) {

    if (todos[i].completed) {

      completed++;

    } else {

      pending++;

    }

  }
  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h2 className="text-center mb-4">
            TO DO LIST
          </h2>
          <AddtoList addToDo={addToDo} />

          <ToDoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
          <div className="mb-3">

            <h5>Total : {todos.length}</h5>

            <h5>Completed : {completed}</h5>

            <h5>Pending : {pending}</h5>

          </div>
        </div>
      </div>
    </div>
  )
};

export default App
