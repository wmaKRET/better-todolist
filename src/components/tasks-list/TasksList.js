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

    console.log(tasks)

    return (
        <div className="task-list">
            <TasksListMenu addTask={addTask}/>
            <TasksListContainer />
        </div>
    )
}

export default List