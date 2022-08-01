import { useContext } from "react"
import { CSSTransition } from "react-transition-group"
import { Context } from "./Context"
import Socials from "./components/socials/Socials"
import Lists from "./components/lists/Lists"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => {
  const { showTasks } = useContext(Context)
  return (
    <>
      <Socials />
      <div className="container">
        <Lists />
        <CSSTransition 
          in={showTasks}
          timeout={300}
          classNames="animate-tasks"
          
        >
          <Tasks />
        </CSSTransition>
      </div>
    </>
  )
}

export default App