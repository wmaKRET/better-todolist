import { useContext } from "react"
import { Context } from "../../Context"
import TaskItem from "./TaskItem"

const TasksList = () => {
    const { listsArray, activeListID } = useContext(Context)
    const activeList = listsArray.filter(list => list.id === activeListID)
    const taskElements = activeList[0].tasks.map(task => (
        <TaskItem
            key={task.id}
            task={task}
        />
    ))

    const numberOfTasksRemaining = () => {
        const activeListArray = listsArray.filter(list => list.id === activeListID)
        const unfinishedTasksArray = activeListArray[0].tasks.filter(task => !task.isCompleted)
        return unfinishedTasksArray.length
    }

    return (
        <div className="tasks__list">
            <p className="tasks__list-remaining">
                {
                    numberOfTasksRemaining() === 1
                        ? `${numberOfTasksRemaining()} task remaining`
                        : `${numberOfTasksRemaining()} tasks remaining`
                }
            </p>
            {taskElements}
        </div>
    )
}

export default TasksList