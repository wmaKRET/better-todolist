import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const TaskItem = ({ taskObj }) => {
    const { toggleTaskCompletion, deleteTaskFromList } = useContext(Context)
    const [hovered, ref] = useHover()

    const isTaskCompletedIcon = () => taskObj.isCompleted
        ? <MdOutlineRadioButtonChecked size={20} />
        : <MdOutlineRadioButtonUnchecked size={20} />

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill size={20} className="hovered" />
        : <RiDeleteBin2Line size={20} />

    return (
        <div
            className={taskObj.isCompleted
                ? "tasks__list-item tasks__list-item-completed"
                : "tasks__list-item"
            }>
            <div
                className="tasks__list-item-radiobtn"
                onClick={() => toggleTaskCompletion(taskObj.id)}
            >
                {isTaskCompletedIcon()}
                <p className={taskObj.isCompleted ? 'completed-task' : ''}>{taskObj.value}</p>
            </div>
            <div
                className="tasks__list-item-delete"
                ref={ref}
                onClick={() => deleteTaskFromList(taskObj.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default TaskItem