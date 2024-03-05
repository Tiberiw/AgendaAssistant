import { useState } from "react"

export default function AllTasks() {
  const [newProject, setNewProject] = useState("");
  const [projects, setProjects] = useState([]);

  function addProject(e) {
    e.preventDefault();
    setProjects( (currentProjects) => {
      return [...currentProjects, {id: crypto.randomUUID(), title: newProject, checked: false}]
    })

    setNewProject("");
  }

    return (
        <div className="all-tasks">
          <h2 className="task-list-title">My projects</h2>
          <ul className="task-list">
            {projects.length === 0 && "No projects"}
            {projects.map( project => {
              return (
                <li className="list-name active-list" key={project.id}>{project.title}</li>
              )
            })}
            <li className="list-name active-list">Work</li>
            <li className="list-name">College</li>
            <li className="list-name">Gym</li>
          </ul>
          <form action="">
            <input value={newProject} onChange={e => setNewProject(e.target.value)} type="text" className="new list" placeholder="new project name" aria-label="new project name"/>
            <button onClick={e => addProject(e)} className="btn create" aria-label="create new project">+</button>
          </form>
        </div>
    )
}