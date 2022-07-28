import { useState } from "react"

import { MdKeyboardArrowDown } from "react-icons/md"

const TasksListMenu = ({ addTask, deleteCompletedTasks, deleteAllTasks }) => {
    const DEFAULT_ALERT = {
        message: "What needs to be done?",
        action: ''
    }

    const [inputValue, setInputValue] = useState("")
    const [alert, setAlert] = useState(DEFAULT_ALERT)

    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const displayAlertAndDisableBtn = (alertMessage, alertAction, buttonClicked) => {
        setTimeout(() => {
            buttonClicked.disabled = true
            setAlert({
                message: alertMessage,
                action: alertAction
            })
        }, 0)
        setTimeout(() => {
            buttonClicked.disabled = false
            setAlert(DEFAULT_ALERT)
        }, 2000)
    }

    const handleAddBtn = (event, taskValue) => {
        addTask(taskValue)
        setInputValue("")
        displayAlertAndDisableBtn("Task added to list.", "success", event.target)
    }

    const handleClearCompletedBtn = (event) => {
        deleteCompletedTasks()
        displayAlertAndDisableBtn("Completed tasks deleted.", "info", event.target)
    }

    const handleClearAllBtn = (event) => {
        deleteAllTasks()
        displayAlertAndDisableBtn("Tasks deleted.", "info", event.target)
    }

    return (
        <div className="task-list__menu">
            <div className="task-list__menu-msg">
                <MdKeyboardArrowDown size={28} />
                <p className={`task-list__menu-msg-${alert.action}`}>{alert.message}</p>
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
                onClick={(event) => handleAddBtn(event, inputValue)}
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