import { useState } from "react"
import Lists from "./components/lists/Lists"
import Socials from "./components/socials/Socials"
import Tasks from "./components/tasks/Tasks"
import "./scss/app.scss"

const App = () => {
  const [listsArray, setListsArray] = useState([])
  const [whichListIsActive, setWitchListIsActive] = useState({ id: 0})

  const createList = (inputValue) => ({
    id: Date.now().toString(),
    value: inputValue,
    tasks: []
  })

  const addList = (inputValue) => {
    const newList = createList(inputValue)
    setListsArray(prevLists => [...prevLists, newList])
    setWitchListIsActive(newList)
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
          whichListIsActiveID={whichListIsActive.id}
          addList={addList}
          deleteList={deleteList}
        />
        <Tasks
          whichListIsActive={whichListIsActive}
        />
      </div>
    </>
  )
}

export default App