import TasksListMenu from "./TasksListMenu"
import TasksListContainer from "./TasksListContainer"

const List = () => {
    return (
        <div className="task-list">
            <TasksListMenu />
            <TasksListContainer />
        </div>
    )
}

export default List