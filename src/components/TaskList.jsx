import TaskItem from "./TaskItem"

export default function TaskList({ projects, clickedProject, setClickedProject }) {

    return (
        <ul className="task-list">
            {projects.length === 0 && "No projects"}
            {projects.map( project => {
                return (
                  <TaskItem project={project} clickedProject={clickedProject} setClickedProject={setClickedProject} key={project.id}/>
                )
            })}
        </ul>
    )
}