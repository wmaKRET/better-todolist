import {
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListItem = ({ task, toggleCompleted }) => {
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
            </div>
            <p className={task.isCompleted ? 'completed-task' : ''}>{task.value}</p>
            <RiDeleteBin2Line />
        </div>
    )
}

export default TasksListItem