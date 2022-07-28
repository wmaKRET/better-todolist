const TasksListMenu = () => {
    return (
        <div className="task-list__menu">
            <p>What needs to be done?</p>
            <input
                className="task-list__menu-input"
                placeholder="Write here..."
            ></input>
            <button className="task-list__menu-btn">ADD TASK</button>
            <button className="task-list__menu-btn">CLEAR COMPLETED</button>
            <button className="task-list__menu-btn">CLEAR ALL</button>
        </div>
    )
}

export default TasksListMenu