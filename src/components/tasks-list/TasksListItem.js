import useHover from "../../hooks/useHover"

import {
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListItem = ({ task, toggleCompleted, deleteTask }) => {
    const [hovered, ref] = useHover()

    const isTaskCompletedIcon = () => task.isCompleted
        ? <MdOutlineRadioButtonChecked />
        : <MdOutlineRadioButtonUnchecked />

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill />
        : <RiDeleteBin2Line />

    return (
        <div
            className={task.isCompleted
                ? "task-list__list-item task-list__list-item-completed"
                : "task-list__list-item"
            }>
            <div
                className="task-list__list-item-radiobtn"
                onClick={() => toggleCompleted(task.id)}
            >
                {isTaskCompletedIcon()}
                <p className={task.isCompleted ? 'completed-task' : ''}>{task.value}</p>
            </div>
            <div
                className="task-list__list-item-delete"
                ref={ref}
                onClick={() => deleteTask(task.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default TasksListItem