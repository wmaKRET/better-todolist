const ListItem = ({ listObj }) => {
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
            <div className="lists__list-item__delete">
                <p>X</p>
            </div>
        </div>
    )
}

export default ListItem