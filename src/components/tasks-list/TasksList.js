import "./tasksList.scss"

const List = () => {
    return (
        <div className="task-list">
            <div className="task-list__panel">
                <div className="task-list__panel-add-task">
                    <input placeholder="Write task..."></input>
                    <button>add task</button>
                </div>
                <button>remove completed</button>
                <button>clear list</button>
            </div>
            <div className="task-list__list">
                <div>3 tasks remaining</div>
                <div>task 1</div>
                <div>task 2</div>
                <div>task 3</div>
            </div>
        </div>
    )
}

export default List