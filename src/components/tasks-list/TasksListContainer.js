import TasksListItem from "./TasksListItem"

const TasksListContainer = ({ tasks, toggleCompleted }) => {
    const taskElements = tasks.map(item => (
        <TasksListItem 
            key={item.id} 
            task={item} 
            toggleCompleted={toggleCompleted}
        />
    ))

    return (
        <div className="task-list__list">
            <p
                className="task-list__list-remaining"
            >
                {
                    tasks.length === 1
                        ? `${tasks.length} task remaining`
                        : `${tasks.length} tasks remaining`
                }
            </p>
            {taskElements}
        </div>
    )
}

export default TasksListContainer