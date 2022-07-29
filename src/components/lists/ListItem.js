import { useContext } from "react"
import { Context } from "../../Context"
import useHover from "../../hooks/useHover"
import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const ListItem = ({ list }) => {
    const { activeListID, toggleActiveList, deleteList} = useContext(Context)
    const [hovered, ref] = useHover()

    const isThisListActive = () => list.id === activeListID
        ? "lists__list-item active"
        : "lists__list-item" 

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill className="hovered" />
        : <RiDeleteBin2Line />

    return (
        <div className={isThisListActive()}>
            <div className="lists__list-item__details">
                <p>{list.tasks.length}</p>
                <p>/</p>
                <p>{list.tasks.length}</p>
            </div>
            <div 
                className="lists__list-item__name"
                onClick={() => toggleActiveList(list.id)}
            >
                <p>{list.value}</p>
            </div>
            <div
                ref={ref}
                className="lists__list-item__delete"
                onClick={() => deleteList(list.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default ListItem