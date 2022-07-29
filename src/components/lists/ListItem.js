import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const ListItem = ({ list }) => {
    const { listsArray, activeListID, toggleActiveList, deleteList } = useContext(Context)
    const [hovered, ref] = useHover()

    const isThisListActive = () => list.id === activeListID
        ? "lists__list-item active"
        : "lists__list-item"

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill className="hovered" />
        : <RiDeleteBin2Line />

    const numberOfCompletedTasks = () => {
        const activeListArray = listsArray.filter(list => list.id === activeListID)
        const completedTasksArray = activeListArray[0].tasks.filter(task => task.isCompleted)
        return completedTasksArray.length
    }

    const numberOfTasks = () => {
        const activeListArray = listsArray.filter(list => list.id === activeListID)
        return activeListArray[0].tasks.length
    }

    return (
        <div className={isThisListActive()}>
            <div className="lists__list-item__details">
                <p>{numberOfCompletedTasks()}</p>
                <p>/</p>
                <p>{numberOfTasks()}</p>
            </div>
            <div
                className="lists__list-item__name"
                onClick={() => toggleActiveList(list.id)}
            >
                <p>{list.value}</p>
            </div>
            <div
                className="lists__list-item__delete"
                ref={ref}
                onClick={() => deleteList(list.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default ListItem