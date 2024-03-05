export default function AllTasks() {
    return (
        <div className="all-tasks">
          <h2 className="task-list-title">My projects</h2>
          <ul className="task-list">
            <li className="list-name active-list">Work</li>
            <li className="list-name">College</li>
            <li className="list-name">Gym</li>
          </ul>
          <form action="">
            <input type="text" className="new list" placeholder="new project name" aria-label="new project name"/>
            <button className="btn create" aria-label="create new project">+</button>
          </form>
        </div>
    )
}