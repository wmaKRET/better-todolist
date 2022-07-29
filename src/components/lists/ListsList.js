const ListsList = ({ listsArray }) => {
    const listElements = listsArray.map(list => (
        <div key={list.id} className="lists__list-item">
            <div className="lists__list-item__details">
                <p>{list.tasks.length}</p>
                <p>/</p>
                <p>{list.tasks.length}</p>
            </div>
            <div className="lists__list-item__name">
                <p>{list.value}</p>
            </div>
            <div className="lists__list-item__delete">
                <p>X</p>
            </div>
        </div>
    ))
    return (
        <div className="lists__list">
            {listElements}
        </div>
    )
}

export default ListsList