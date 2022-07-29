import { useState } from "react"
import Lists from "./components/lists/Lists"
import Socials from "./components/socials/Socials"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => {
  const [listsArray, setListsArray] = useState([])
  const [activeListID, setActiveListID] = useState(0)

  const createList = (inputValue) => ({
    id: Date.now().toString(),
    value: inputValue,
    tasks: []
  })

  const toggleActiveList = (listID) => {
    const activeList = listsArray.filter(list => list.id === listID)
    setActiveListID(activeList[0].id)
  }

  const addList = (inputValue) => {
    const newList = createList(inputValue)
    setListsArray(prevLists => [...prevLists, newList])
    setActiveListID(newList.id)
  }
  const deleteList = (listID) => {
    if (activeListID === listID) setActiveListID(0)
    setListsArray(prevLists => prevLists.filter(list => list.id != listID))
  }

  return (
    <>
      <Socials />
      <div className="container">
        <Lists
          listsArray={listsArray}
          activeListID={activeListID}
          toggleActiveList={toggleActiveList}
          addList={addList}
          deleteList={deleteList}
        />
        <Tasks
          listsArray={listsArray}
          activeListID={activeListID}
        />
      </div>
    </>
  )
}

export default App