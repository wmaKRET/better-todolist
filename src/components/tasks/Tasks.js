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

    return (
        <>
            {activeListID !== 0 &&
            <div className="tasks">
                <TasksMenu />
                <TasksList
                    tasksArray={tasksArray}
                    numberOfTasksRemaining={tasksArray.length - numberOfCompletedTasks}
                />
            </div>}
        </>
    )
}

export default Tasks