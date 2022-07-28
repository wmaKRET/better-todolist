import { useState } from "react"

import { MdKeyboardArrowDown } from "react-icons/md"

const TasksListMenu = ({ addTask, deleteCompletedTasks, deleteAllTasks }) => {
    const TIMEOUT_IN_MS = 1000
    const DEFAULT_ALERT = {
        message: "What needs to be done?",
        action: ''
    }

    const [inputValue, setInputValue] = useState("")
    const [alert, setAlert] = useState(DEFAULT_ALERT)
    const [AreButtonsDisabled, setAreButtonsDisabled] = useState(false)

    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const displayAlert = (alertMessage, alertAction) => {
        setAlert({
            message: alertMessage,
            action: alertAction
        })
        setTimeout(() => {
            setAlert(DEFAULT_ALERT)
        }, TIMEOUT_IN_MS)
    }

    const disableButtons = () => {
        setAreButtonsDisabled(true)
        setTimeout(() => {
            setAreButtonsDisabled(false)
        }, TIMEOUT_IN_MS)
    }

    const handleAddBtn = (valueFromInput) => {
        if (inputValue.length !== 0) {
            disableButtons()
            displayAlert("Task added to list.", "success")
            addTask(valueFromInput)
            setInputValue("")
        } else {
            disableButtons()
            displayAlert("Input is empty.", "failure")
        }
    }

    const handleClearCompletedBtn = () => {
        disableButtons()
        displayAlert("Completed tasks deleted.", "info")
        deleteCompletedTasks()
    }

    const handleClearAllBtn = () => {
        disableButtons()
        displayAlert("Tasks deleted.", "info")
        deleteAllTasks()
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
                onClick={() => handleAddBtn(inputValue)}
                disabled={AreButtonsDisabled}
            >
                ADD TASK
            </button>
            <button
                className="task-list__menu-btn"
                onClick={handleClearCompletedBtn}
                disabled={AreButtonsDisabled}
            >
                CLEAR COMPLETED
            </button>
            <button
                className="task-list__menu-btn"
                onClick={handleClearAllBtn}
                disabled={AreButtonsDisabled}
            >
                CLEAR ALL
            </button>
        </div>
    )
}

export default TasksListMenu