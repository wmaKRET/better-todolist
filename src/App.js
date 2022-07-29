import Lists from "./components/lists/Lists"
import Socials from "./components/socials/Socials"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => (
  <>
    <Socials />
    <div className="container">
      <Lists />
      <Tasks />
    </div>
  </>
)

export default App