import { useState } from "react"
import NewTodoForm from "./NewTodoForm";
import TodoListContent from "./TodoListContent";
import DeleteTodoButtons from "./DeleteTodoButtons";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, completed) {
    setTodos( currentTodos => {
      return currentTodos.map( todo => {
        if (todo.id === id) {
          return {...todo, completed};
        }
        return todo;
      })      
    })
  }

  function addTodo(title) {
     setTodos((currentTodos) => {
          return [...currentTodos, {id: crypto.randomUUID(), title, completed: false}]
        });
  }

  function deleteCompletedTodos() {
    const checkedTodosIds = todos.filter( todo => todo.completed)
                            .map(todo => todo.id); 

    setTodos( currentTodos => {
        return currentTodos.filter( todo => !checkedTodosIds.includes(todo.id) )
    });
  }

  return (
        <div className="todo-list">
          <div className="todo-header">
            <h2 className="list-title">Work</h2>
            <p className="task-count"> Remaining tasks: {todos.length}</p>
          </div>
          <div className="todo-body">
            <TodoListContent todos={todos} toggleTodo={toggleTodo}/>
            <NewTodoForm onSubmit={addTodo}/>
            {todos.length !==0 && <DeleteTodoButtons deleteCompletedTodos={deleteCompletedTodos} setTodos={setTodos}/>} 
          </div>
        </div>
  )
}