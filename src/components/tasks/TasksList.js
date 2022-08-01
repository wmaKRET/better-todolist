import { useContext } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Context } from "../../Context"
import TaskItem from "./TaskItem"

const TasksList = () => {
    const { listsArray, activeListID } = useContext(Context)
    // picks proper list to display its tasks
    const activeList = listsArray.filter(list => list.id === activeListID)
    const taskElements = activeList[0].tasks.map(task => (
        <CSSTransition
            key={task.id}
            timeout={300}
            classNames="animate-task-item"
        >
            <TaskItem task={task} />
        </CSSTransition>
    ))

    // returns number of taks that needs to be completed
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
            <TransitionGroup>
                {taskElements}
            </TransitionGroup>
        </div>
    )
}

export default TasksList