import { MdKeyboardArrowDown } from "react-icons/md"

const TasksListMenu = () => {
    return (
        <div className="task-list__menu">
            <div className="task-list__menu-msg">
                <MdKeyboardArrowDown size={28} />
                <p id="task-list-msg">What needs to be done?</p>
                <MdKeyboardArrowDown size={28} />
            </div>
            <input
                className="task-list__menu-input"
                placeholder="Write here..."
            ></input>
            <button
                className="task-list__menu-btn"
            >
                ADD TASK
            </button>
            <button
                className="task-list__menu-btn"
            >
                CLEAR COMPLETED
            </button>
            <button
                className="task-list__menu-btn"
            >
                CLEAR ALL
            </button>
        </div>
    )
}

export default TasksListMenu