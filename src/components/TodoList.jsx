import DeleteTodoButtons from "./DeleteTodoButtons.jsx";
import NewTodoForm from "./NewTodoForm.jsx";
import TodoListContent from "./TodoListContent.jsx";

export default function TodoList({currentProject , setProjects}) {

  function setTodos(tasks) {
    setProjects( currentProjects => {
      return currentProjects.map( project => {
          if(project.id === currentProject.id) {
            return {...project, tasks};
          }
          return project;
      })
    })
  }

  function toggleTodo(id, completed) {
    setProjects( currentProjects => {
      return currentProjects.map( project => {
          if(project.id === currentProject.id) {
            return {...project, tasks: project.tasks.map(todo => {
              if (todo.id === id) {
                return {...todo, completed};
              }
              return todo;
            })};
          }
          return project;
      })
    })
  }

  function addTodo(title) {
    setProjects( currentProjects => {
      return currentProjects.map( project => {
          if(project.id === currentProject.id) {
            return {...project, tasks: [...project.tasks, {id: crypto.randomUUID(), title, completed: false}]};
          }
          return project;
      })
    })
  }

  function deleteCompletedTodos() {
    const checkedTodosIds = currentProject.tasks.filter( todo => todo.completed)
                            .map(todo => todo.id); 
    setProjects( currentProjects => {
      return currentProjects.map( project => {
          if(project.id === currentProject.id) {
            return {...project, tasks: project.tasks.filter(todo => !checkedTodosIds.includes(todo.id))};
          }
          return project;
      })
    })
  }

  return (
        <div className="todo-list">
          <div className="todo-header">
            <h2 className="list-title">{currentProject.title}</h2>
            <p className="task-count"> Remaining tasks: {currentProject.tasks.length}</p>
          </div>
          <div className="todo-body">
            <TodoListContent todos={currentProject.tasks} toggleTodo={toggleTodo}/>
            <NewTodoForm onSubmit={addTodo}/>
            {currentProject.tasks.length !==0 && <DeleteTodoButtons deleteCompletedTodos={deleteCompletedTodos} setTodos={setTodos}/>} 
          </div>
        </div>
  )
}