import { useState } from "react"
import Lists from "./components/lists/Lists"
import Socials from "./components/socials/Socials"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => {
  const [listsArray, setListsArray] = useState([])

  const createList = (inputValue) => ({
    id: Date.now().toString(),
    value: inputValue,
    tasks: []
  })

  const addList = (inputValue) => {
    setListsArray(prevLists => [...prevLists, createList(inputValue)])
  }

  const deleteList = (listID) => {
    setListsArray(prevLists => prevLists
      .filter(list => list.id != listID))
  }

  return (
    <>
      <Socials />
      <div className="container">
        <Lists 
          listsArray={listsArray}
          addList={addList}
          deleteList={deleteList}
        />
        <Tasks 
        
        />
      </div>
    </>
  )
}

export default App