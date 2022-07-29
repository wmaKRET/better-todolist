import { useContext, useEffect, useState } from "react"
import { Context } from "../../Context"
import TasksMenu from "./TasksMenu"
import TasksList from "./TasksList"

const Tasks = () => {
    const { activeListID } = useContext(Context)
    const [tasksArray, setTasksArray] = useState([])
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)

    useEffect(() => {
        const completedTasks = tasksArray.filter(task => task.isCompleted)
        setNumberOfCompletedTasks(completedTasks.length)
    }, [tasksArray])

    const deleteCompletedTasks = () => {
        setTasksArray(prevTasks => prevTasks
            .filter(task => !task.isCompleted)
        )
    }

    const deleteAllTasks = () => {
        setTasksArray([])
    }

    const toggleCompleted = (taskID) => {
        setTasksArray(prevTasks => prevTasks
            .map(task => task.id === taskID
                ? { ...task, isCompleted: !task.isCompleted }
                : task
            )
        )
    }

    const deleteTask = (taskID) => {
        setTasksArray(prevTasks => prevTasks
            .filter(task => task.id !== taskID)
        )
    }

    return (
        <>
            {activeListID !== 0 &&
            <div className="tasks">
                <TasksMenu
                    numberOfTasks={tasksArray.length}
                    numberOfCompletedTasks={numberOfCompletedTasks}
                    deleteCompletedTasks={deleteCompletedTasks}
                    deleteAllTasks={deleteAllTasks}
                />
                <TasksList
                    tasksArray={tasksArray}
                    numberOfTasksRemaining={tasksArray.length - numberOfCompletedTasks}
                    toggleCompleted={toggleCompleted}
                    deleteTask={deleteTask}
                />
            </div>}
        </>
    )
}

export default Tasks