import AllTasks from './AllTasks.jsx'
import TodoList from './TodoList.jsx'
import './styles.css'

export default function App() {
  return (
      <div className="container">
        <h1 className="title">My Agenda</h1>
        <AllTasks/>
        <TodoList/>
      </div>
  )
}