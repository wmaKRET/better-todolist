import Socials from "./components/socials/Socials"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => (
  <>
    <Socials />
    <div className="container">
      <Tasks />
    </div>
  </>
)

export default App