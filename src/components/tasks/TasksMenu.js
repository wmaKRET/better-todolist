import { useContext, useState } from "react"
import { Context } from "../../Context"

const TasksMenu = () => {
    const TIMEOUT_IN_MS = 1000
    const DEFAULT_ALERT = {
        message: "What needs to be done?",
        action: ''
    }
    const { listsArray, activeListID, addTaskToList, deleteCompletedTasks, deleteAllTasks } = useContext(Context)
    // holds current input value (updates on change)
    const [taskInputValue, setTaskInputValue] = useState("")
    const [alert, setAlert] = useState(DEFAULT_ALERT)
    const [AreButtonsDisabled, setAreButtonsDisabled] = useState(false)

    // updates taskInputValue state on change
    const handleChange = (event) => {
        const { value } = event.target
        setTaskInputValue(value)
    }

    // displays messages on top of Tasks component
    const displayAlert = (alertMessage, alertAction) => {
        setAlert({
            message: alertMessage,
            action: alertAction
        })
        setTimeout(() => {
            setAlert(DEFAULT_ALERT)
        }, TIMEOUT_IN_MS)
    }

    // disables button to prevent user from pressing multiple buttons at one time
    const disableButtons = () => {
        setAreButtonsDisabled(true)
        setTimeout(() => {
            setAreButtonsDisabled(false)
        }, TIMEOUT_IN_MS)
    }

    // adds new task to active list
    const handleAddBtn = (valueFromInput) => {
        if (taskInputValue.length !== 0) {
            disableButtons()
            displayAlert("Task added to list", "success")
            addTaskToList(valueFromInput)
            setTaskInputValue("")
        } else {
            disableButtons()
            displayAlert("Input is empty", "failure")
        }
    }

    // clears completed tasks in active list
    const handleClearCompletedBtn = () => {
        const activeListArray = listsArray.filter(list => list.id === activeListID)
        const completedTasksArray = activeListArray[0].tasks.filter(task => task.isCompleted)
        const numberOfCompletedTasks = completedTasksArray.length
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

    // clears all tasks in active list
    const handleClearAllBtn = () => {
        const activeListArray = listsArray.filter(list => list.id === activeListID)
        const numberOfTasks = activeListArray[0].tasks.length
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
                className="tasks__menu-input"
                type="text"
                placeholder="Write here..."
                name="taskInputValue"
                value={taskInputValue}
                onChange={handleChange}
            ></input>
            <div className="tasks__menu-btns">
                <button
                    className="tasks__menu-btn"
                    disabled={AreButtonsDisabled}
                    onClick={() => handleAddBtn(taskInputValue)}
                >
                    ADD TASK
                </button>
                <button
                    className="tasks__menu-btn"
                    disabled={AreButtonsDisabled}
                    onClick={handleClearCompletedBtn}
                >
                    CLEAR COMPLETED
                </button>
                <button
                    className="tasks__menu-btn"
                    disabled={AreButtonsDisabled}
                    onClick={handleClearAllBtn}
                >
                    CLEAR ALL
                </button>
            </div>
        </div>
    )
}

export default TasksMenu