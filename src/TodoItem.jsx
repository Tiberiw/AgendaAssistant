export default function TodoItem({ id, title, completed, toggleTodo}) {
    return (
        <div className="task">
            <input type="checkbox"
                id={"task-" + id}
                checked={completed}
                onChange={(e) => toggleTodo(id, e.target.checked)}
            />
            <label htmlFor={"task-" + id}>
                <span className="custom-checkbox"></span>
                {title}
            </label>
         </div>
    )
}