import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const ListItem = ({ list }) => {
    const { activeListID, toggleActiveList, deleteList, animateTasksIn, animateTasksOut } = useContext(Context)
    // uses mouseenter and mouseleave event listeners
    // used to switch between trash bin icons
    const [hovered, ref] = useHover()

    const isThisListActive = () => list.id === activeListID
        ? "lists__list-item active"
        : "lists__list-item"

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill className="hovered" />
        : <RiDeleteBin2Line />

    // returns number of tasks that are completed in active list
    const numberOfCompletedTasks = () => {
        const unfinishedTasksArray = list.tasks.filter(task => !task.isCompleted)
        return unfinishedTasksArray.length
    }

    // returns numbers of tasks in active list
    const numberOfTasks = () => {
        return list.tasks.length
    }

    // switches active list to display its tasks
    const handleWhenNameIsClicked = (listID) => {
        toggleActiveList(listID)
        // animates tasks list in
        animateTasksIn()
    }

    // deletes list from lists array
    const handleDeleteButton = (listID) => {
        setTimeout(() => deleteList(listID), 300)
        // animates tasks list out
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