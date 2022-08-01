import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const ListItem = ({ list }) => {
    const { activeListID, toggleActiveList, deleteList, animateTasksIn, animateTasksOut } = useContext(Context)
    const [hovered, ref] = useHover()

    const isThisListActive = () => list.id === activeListID
        ? "lists__list-item active"
        : "lists__list-item"

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill className="hovered" />
        : <RiDeleteBin2Line />

    const numberOfCompletedTasks = () => {
        const unfinishedTasksArray = list.tasks.filter(task => !task.isCompleted)
        return unfinishedTasksArray.length
    }

    const numberOfTasks = () => {
        return list.tasks.length
    }

    const handleWhenNameIsClicked = (listID) => {
        toggleActiveList(listID)
        animateTasksIn()
    }

    const handleDeleteButton = (listID) => {
        setTimeout(() => deleteList(listID), 300)
        animateTasksOut()
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
                onClick={() => handleWhenNameIsClicked(list.id)}
            >
                <p>{list.value}</p>
            </div>
            <div
                className="lists__list-item__delete"
                ref={ref}
                onClick={() => handleDeleteButton(list.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default ListItem