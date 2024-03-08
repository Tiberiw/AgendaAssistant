import { useState } from "react";

export default function NewTaskForm({ addProject }) {
    const [newProject, setNewProject] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newProject === "") return;
        addProject(newProject)
        setNewProject("");
      }

    return (
        <form onSubmit={handleSubmit} action="">
            <input value={newProject} onChange={e => setNewProject(e.target.value)}  type="text" className="new list" placeholder="new project name" aria-label="new project name"/>
            <button className="btn create" aria-label="create new project">+</button>
        </form>
    )
}