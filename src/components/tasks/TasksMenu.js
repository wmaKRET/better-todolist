import { useState } from "react"

const TasksMenu = ({ numberOfTasks, numberOfCompletedTasks, addTask, deleteCompletedTasks, deleteAllTasks }) => {
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
            displayAlert("Task added to list", "success")
            addTask(valueFromInput)
            setInputValue("")
        } else {
            disableButtons()
            displayAlert("Input is empty", "failure")
        }
    }

    const handleClearCompletedBtn = () => {
        if (numberOfCompletedTasks > 0) {
            disableButtons()
            displayAlert(
                numberOfCompletedTasks === 1
                    ? `${numberOfCompletedTasks} task deleted`
                    : `${numberOfCompletedTasks} tasks deleted`,
                "info")
            deleteCompletedTasks()
        } else {
            disableButtons()
            displayAlert("There are no tasks to delete", "failure")
        }
    }

    const handleClearAllBtn = () => {
        if (numberOfTasks > 0) {
            disableButtons()
            displayAlert(
                numberOfTasks === 1
                    ? `${numberOfTasks} task deleted`
                    : `${numberOfTasks} tasks deleted`,
                "info"
            )
            deleteAllTasks()
        } else {
            disableButtons()
            displayAlert("There are no tasks to delete", "failure")
        }
    }

    return (
        <div className="tasks__menu">
            <div className="tasks__menu-msg">
                <p className={`tasks__menu-msg-${alert.action}`}>{alert.message}</p>
            </div>
            <input
                type="text"
                className="tasks__menu-input"
                placeholder="Write here..."
                name="inputValue"
                value={inputValue}
                onChange={handleChange}
            ></input>
            <div className="tasks__menu-btns">
                <button
                    className="tasks__menu-btn"
                    onClick={() => handleAddBtn(inputValue)}
                    disabled={AreButtonsDisabled}
                >
                    ADD TASK
                </button>
                <button
                    className="tasks__menu-btn"
                    onClick={handleClearCompletedBtn}
                    disabled={AreButtonsDisabled}
                >
                    CLEAR COMPLETED
                </button>
                <button
                    className="tasks__menu-btn"
                    onClick={handleClearAllBtn}
                    disabled={AreButtonsDisabled}
                >
                    CLEAR ALL
                </button>
            </div>
        </div>
    )
}

export default TasksMenu