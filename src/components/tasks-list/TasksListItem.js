import {
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListItem = ({ task, toggleCompleted, deleteTask }) => {
    const isTaskCompletedIcon = () => task.isCompleted
        ? <MdOutlineRadioButtonChecked />
        : <MdOutlineRadioButtonUnchecked />

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
                onClick={() => deleteTask(task.id)}
            >
                <RiDeleteBin2Line />
            </div>
        </div>
    )
}

export default TasksListItem