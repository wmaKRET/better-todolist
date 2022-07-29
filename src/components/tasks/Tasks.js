import { useContext } from "react"
import { Context } from "../../Context"
import TasksMenu from "./TasksMenu"
import TasksList from "./TasksList"

const Tasks = () => {
    const { activeListID } = useContext(Context)

    return (
        <>
            {activeListID !== 0 &&
                <div className="tasks">
                    <TasksMenu />
                    <TasksList />
                </div>
            }
        </>
    )
}

export default Tasks