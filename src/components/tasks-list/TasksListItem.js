import {
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListItem = ({ task }) => {
    return (
        <div className="task-list__list-item">
            {
                task.isCompleted 
                    ? <MdOutlineRadioButtonUnchecked />
                    : <MdOutlineRadioButtonChecked />
            }            
            <p>{task.value}</p>
            <RiDeleteBin2Line />
        </div>
    )
}

export default TasksListItem