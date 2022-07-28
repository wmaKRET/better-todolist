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
        setTasks(prevTasks => prevTasks.map(task => {
            return task.id === taskID
                ? {...task, isCompleted: !task.isCompleted}
                : task
        }))
    }

    return (
        <div className="task-list">
            <TasksListMenu 
                addTask={addTask} 
            />
            <TasksListContainer 
                tasks={tasks} 
                toggleCompleted={toggleCompleted}
            />
        </div>
    )
}

export default List