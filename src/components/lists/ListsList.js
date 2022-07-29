import ListItem from "./ListItem"

const ListsList = ({ listsArray, deleteList }) => {
    const listElements = listsArray.map(list => (
        <ListItem
            key={list.id}
            listObj={list}
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