import { useEffect, useState } from 'react';
import NewTaskForm from './NewTaskForm.jsx'
import TodoList from './TodoList.jsx'
import '../styles.css'
import TaskList from './TaskList.jsx';

export default function App() {
  const [projects, setProjects] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  const [clickedProject, setClickedProject] = useState(null);


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(projects))
  }, [projects])


  function addProject(title) { 
    setProjects( (currentProjects) => {
      return [...currentProjects, {id: crypto.randomUUID(), title, tasks: []}]
    })
  }

  return (
      <div className="container">
        <h1 className="title">My Agenda</h1>
        <div className="all-tasks">
          <h2 className="task-list-title">My projects</h2>
          <TaskList projects={projects} clickedProject={clickedProject} setClickedProject={setClickedProject}/>
          <NewTaskForm addProject={addProject}/>
        </div>
        {clickedProject !== null && <TodoList currentProject={projects.find(project => project.id === clickedProject.id)} setProjects={setProjects}/>}
      </div>
  )
}