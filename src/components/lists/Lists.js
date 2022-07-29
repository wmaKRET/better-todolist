import ListsList from "./ListsList"
import ListsMenu from "./ListsMenu"

const Lists = ({ listsArray, whichListIsActiveID, addList, deleteList}) => {
    return (
        <div className="lists">
            <ListsMenu 
                addList={addList}
            />
            <ListsList 
                listsArray={listsArray}
                whichListIsActiveID={whichListIsActiveID}
                deleteList={deleteList}
            />
        </div>
    )
}

export default Lists