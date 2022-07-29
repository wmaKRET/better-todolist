import useHover from "../../hooks/useHover"

import { RiDeleteBin2Line, RiDeleteBin2Fill } from "react-icons/ri"

const ListItem = ({ listObj, deleteList }) => {
    const [hovered, ref] = useHover()

    const isTrashBinHoveredIcon = () => hovered
        ? <RiDeleteBin2Fill className="hovered" />
        : <RiDeleteBin2Line />

    return (
        <div className="lists__list-item">
            <div className="lists__list-item__details">
                <p>{listObj.tasks.length}</p>
                <p>/</p>
                <p>{listObj.tasks.length}</p>
            </div>
            <div className="lists__list-item__name">
                <p>{listObj.value}</p>
            </div>
            <div
                ref={ref}
                className="lists__list-item__delete"
                onClick={() => deleteList(listObj.id)}
            >
                {isTrashBinHoveredIcon()}
            </div>
        </div>
    )
}

export default ListItem