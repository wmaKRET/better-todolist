import ListItem from "./ListItem"

const ListsList = ({ listsArray }) => {
    const listElements = listsArray.map(list => (
        <ListItem 
            key={list.id}
            listObj={list}
        />
    ))

    return (
        <div className="lists__list">
            {listElements}
        </div>
    )
}

export default ListsList