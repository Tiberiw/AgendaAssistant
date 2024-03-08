export default function TaskItem({ project, clickedProject, setClickedProject }) {
    return (
        <li onClick={() => setClickedProject(project)} className={clickedProject === null ? "list-name" : (project.id === clickedProject.id ? "list-name active-list" : "list-name")}>{project.title}</li>
    )
}