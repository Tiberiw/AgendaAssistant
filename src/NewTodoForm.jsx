import { useState } from "react";

export default function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (newItem === "") return;
        onSubmit(newItem);
        setNewItem("");
    }

    return (
        <div className="new-task-creator">
              <form onSubmit={handleSubmit} action="">
                <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} className="new task" placeholder="new task name" aria-label="new task name"/>
                <button className="btn create" aria-label="create new task">+</button>
              </form>
        </div>
    )
}