import { useEffect, useState } from "react"

import TasksMenu from "./TasksMenu"
import TasksList from "./TasksList"

const Tasks = ({ activeListID }) => {
    const [tasksArray, setTasksArray] = useState([])
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)

    useEffect(() => {
        const completedTasks = tasksArray.filter(task => task.isCompleted)
        setNumberOfCompletedTasks(completedTasks.length)
    }, [tasksArray])

    const createTask = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        isCompleted: false
    })

    const addTask = (inputValue) => {
        setTasksArray(prevTasks => [...prevTasks, createTask(inputValue)])
    }

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
                    addTask={addTask}
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