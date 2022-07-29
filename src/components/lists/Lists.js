import ListsList from "./ListsList"
import ListsMenu from "./ListsMenu"

const Lists = ({ listsArray, addList, deleteList}) => {
    return (
        <div className="lists">
            <ListsMenu 
                addList={addList}
            />
            <ListsList 
                listsArray={listsArray}
                deleteList={deleteList}
            />
        </div>
    )
}

export default Lists