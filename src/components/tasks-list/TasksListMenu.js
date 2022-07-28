import { useState } from "react"

import { MdKeyboardArrowDown } from "react-icons/md"

const TasksListMenu = ({ addTask, deleteCompletedTasks, deleteAllTasks }) => {
    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const handleAddBtn = (taskValue) => {
        addTask(taskValue)
        setInputValue('')
    }

    const handleClearCompletedBtn = () => {
        deleteCompletedTasks()
    }

    const handleClearAllBtn = () => {
        deleteAllTasks()
    }

    return (
        <div className="task-list__menu">
            <div className="task-list__menu-msg">
                <MdKeyboardArrowDown size={28} />
                <p id="task-list-msg">What needs to be done?</p>
                <MdKeyboardArrowDown size={28} />
            </div>
            <input
                type="text"
                className="task-list__menu-input"
                placeholder="Write here..."
                name="inputValue"
                value={inputValue}
                onChange={handleChange}
            ></input>
            <button
                className="task-list__menu-btn"
                onClick={() => handleAddBtn(inputValue)}
            >
                ADD TASK
            </button>
            <button
                className="task-list__menu-btn"
                onClick={handleClearCompletedBtn}
            >
                CLEAR COMPLETED
            </button>
            <button
                className="task-list__menu-btn"
                onClick={handleClearAllBtn}
            >
                CLEAR ALL
            </button>
        </div>
    )
}

export default TasksListMenu