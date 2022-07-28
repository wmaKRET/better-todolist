import { useState } from "react"

import TasksListMenu from "./TasksListMenu"
import TasksListContainer from "./TasksListContainer"

const List = () => {
    const [tasks, setTasks] = useState([])

    const createTask = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        isCompleted: false
    })

    const addTask = (inputValue) => {
        setTasks(prevTasks => [...prevTasks, createTask(inputValue)])
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
                addTask={addTask}
            />
            <TasksListContainer
                tasks={tasks}
                toggleCompleted={toggleCompleted}
                deleteTask={deleteTask}
            />
        </div>
    )
}

export default List