import ListItem from "./ListItem"

const ListsList = ({ listsArray, activeListID, toggleActiveList, deleteList }) => {
    const listElements = listsArray.map(list => (
        <ListItem
            key={list.id}
            listObj={list}
            activeListID={activeListID}
            toggleActiveList={toggleActiveList}
            deleteList={deleteList}
        />
    ))

    return (
        <div className="lists__list">
            {listElements}
        </div>
    )
}

export default ListsList