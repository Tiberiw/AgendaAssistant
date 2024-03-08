export default function DeleteTodoButtons({ deleteCompletedTodos, setTodos }) {
    return (
        <div className="delete-stuff">
            <button className="btn delete" onClick={() => deleteCompletedTodos()}>Clear completed tasks</button>
            <button className="btn delete" onClick={() => setTodos([])}>Delete all tasks</button>
        </div>
    )
}