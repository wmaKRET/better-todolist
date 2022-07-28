import TasksListItem from "./TasksListItem"

const TasksListContainer = ({ tasks, numberOfTasksRemaining, toggleCompleted, deleteTask }) => {
    const taskElements = tasks.map(item => (
        <TasksListItem 
            key={item.id} 
            task={item} 
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
        />
    ))

    return (
        <div className="task-list__list">
            <p
                className="task-list__list-remaining"
            >
                {
                    numberOfTasksRemaining === 1
                        ? `${numberOfTasksRemaining} task remaining`
                        : `${numberOfTasksRemaining} tasks remaining`
                }
            </p>
            {taskElements}
        </div>
    )
}

export default TasksListContainer