import TasksListItem from "./TasksListItem"

const TasksListContainer = () => {
    return (
        <div className="task-list__list">
            <p 
                className="task-list__list-remaining"
            >
                3 tasks remaining
            </p>
            <TasksListItem />
        </div>
    )
}

export default TasksListContainer