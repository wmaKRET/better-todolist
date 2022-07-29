import ListsList from "./ListsList"
import ListsMenu from "./ListsMenu"

const Lists = ({ listsArray, whichListIsActiveID, toggleActiveList, addList, deleteList}) => {
    return (
        <div className="lists">
            <ListsMenu 
                addList={addList}
            />
            <ListsList 
                listsArray={listsArray}
                whichListIsActiveID={whichListIsActiveID}
                toggleActiveList={toggleActiveList}
                deleteList={deleteList}
            />
        </div>
    )
}

export default Lists