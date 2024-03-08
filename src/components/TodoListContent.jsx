import TodoItem from "./TodoItem"

export default function TodoListContent({ todos, toggleTodo }) {
    return (
        <div className="tasks">
            {todos.map(todo => {
                return (
                  <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo}/>
                )
            })}    
        </div>
    )
}