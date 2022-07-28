import TasksListMenu from "./TasksListMenu"

const List = () => {
    return (
        <div className="task-list">
            <TasksListMenu />
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