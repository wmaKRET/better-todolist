import Task from "./Task"

const TasksList = ({ tasksArray, numberOfTasksRemaining, toggleCompleted, deleteTask }) => {
    const taskElements = tasksArray.map(item => (
        <Task
            key={item.id}
            taskObj={item}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
        />
    ))

    return (
        <div className="tasks__list">
            <p
                className="tasks__list-remaining"
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

export default TasksList