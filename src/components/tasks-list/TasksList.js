import { useEffect, useState } from "react"

import TasksListMenu from "./TasksListMenu"
import TasksListContainer from "./TasksListContainer"

const List = () => {
    const [tasks, setTasks] = useState([])
    const [numberOfCompletedTasks, setNumberOfCompletedTasks] = useState(0)

    useEffect(() => {
        const completedTasks = tasks.filter(task => task.isCompleted)
        setNumberOfCompletedTasks(completedTasks.length)
    }, [tasks])

    const createTask = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        isCompleted: false
    })

    const addTask = (inputValue) => {
        setTasks(prevTasks => [...prevTasks, createTask(inputValue)])
    }

    const deleteCompletedTasks = () => {
        setTasks(prevTasks => prevTasks
            .filter(task => !task.isCompleted)
        )
    }

    const deleteAllTasks = () => {
        setTasks([])
    }

    const toggleCompleted = (taskID) => {
        setTasks(prevTasks => prevTasks
            .map(task => task.id === taskID
                ? { ...task, isCompleted: !task.isCompleted }
                : task
            )
        )
    }

    const deleteTask = (taskID) => {
        setTasks(prevTasks => prevTasks
            .filter(task => task.id !== taskID)
        )
    }

    return (
        <div className="task-list">
            <TasksListMenu
                numberOfTasks={tasks.length}
                numberOfCompletedTasks={numberOfCompletedTasks}
                addTask={addTask}
                deleteCompletedTasks={deleteCompletedTasks}
                deleteAllTasks={deleteAllTasks}
            />
            <TasksListContainer
                tasks={tasks}
                numberOfTasksRemaining={tasks.length - numberOfCompletedTasks}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default List