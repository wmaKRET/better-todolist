import ListsList from "./ListsList"
import ListsMenu from "./ListsMenu"

const Lists = ({ listsArray, activeListID, toggleActiveList, addList, deleteList}) => {
    return (
        <div className="lists">
            <ListsMenu 
                addList={addList}
            />
            <ListsList 
                listsArray={listsArray}
                activeListID={activeListID}
                toggleActiveList={toggleActiveList}
                deleteList={deleteList}
            />
        </div>
    )
}

export default Lists