import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { MdOutlineRadioButtonUnchecked, MdOutlineRadioButtonChecked } from "react-icons/md"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const TaskItem = ({ task }) => {
    const { toggleTaskCompletion, deleteTaskFromList } = useContext(Context)
    // uses mouseenter and mouseleave event listeners
    // used to switch between trash bin icons
    const [hovered, ref] = useHover()

    const isTaskCompletedIcon = () => task.isCompleted
        ? <MdOutlineRadioButtonChecked size={20} />
        : <MdOutlineRadioButtonUnchecked size={20} />

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill size={20} className="hovered" />
        : <RiDeleteBin2Line size={20} />

    return (
        <div
            className={task.isCompleted
                ? "tasks__list-item tasks__list-item-completed"
                : "tasks__list-item"}
        >
            <div
                className="tasks__list-item-radiobtn"
                onClick={() => toggleTaskCompletion(task.id)}
            >
                {isTaskCompletedIcon()}
                <p className={task.isCompleted ? 'completed-task' : ''}>{task.value}</p>
            </div>
            <div
                className="tasks__list-item-delete"
                ref={ref}
                onClick={() => deleteTaskFromList(task.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default TaskItem