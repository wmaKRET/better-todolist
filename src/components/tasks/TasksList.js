import { useContext } from "react"
import { Context } from "../../Context"
import TaskItem from "./TaskItem"

const TasksList = ({ tasksArray, numberOfTasksRemaining, toggleCompleted, deleteTask }) => {
    const { listsArray, activeListID } = useContext(Context)
    const activeList = listsArray.filter(list => list.id === activeListID)
    const taskElements = activeList[0].tasks.map(task => (
        <TaskItem
            key={task.id}
            taskObj={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
        />
    ))

    return (
        <div className="tasks__list">
            <p
                className="tasks__list-remaining"
            >
                {
                    numberOfTasksRemaining === 1
                        ? `${numberOfTasksRemaining} task remaining`
                        : `${numberOfTasksRemaining} tasks remaining`
                }
            </p>
            {taskElements}
        </div>
    )
}

export default TasksList