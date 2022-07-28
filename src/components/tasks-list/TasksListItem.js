import {
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListItem = () => {
    return (
        <div className="task-list__list-item">
            <MdOutlineRadioButtonUnchecked />
            <p>task 1</p>
            <RiDeleteBin2Line />
        </div>
    )
}

export default TasksListItem