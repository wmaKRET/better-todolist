import {      
    MdOutlineRadioButtonUnchecked,
    MdOutlineRadioButtonChecked
} from "react-icons/md"
import {
    RiDeleteBin2Line,
    RiDeleteBin2Fill
} from "react-icons/ri"

const TasksListContainer = () => {
    return (
        <div className="task-list__list">
            <p 
                className="task-list__list-remaining"
            >
                3 tasks remaining
            </p>
            <div className="task-list__list-item">
                <MdOutlineRadioButtonUnchecked />
                <p>task 1</p>
                <RiDeleteBin2Line />
            </div>
            <div className="task-list__list-item">
                <MdOutlineRadioButtonChecked />
                <p>task 2</p>
                <RiDeleteBin2Fill />
            </div>
        </div>
    )
}

export default TasksListContainer