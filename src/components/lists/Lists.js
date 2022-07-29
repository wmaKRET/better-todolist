import { useState } from "react"
import ListsList from "./ListsList"

import ListsMenu from "./ListsMenu"

const Lists = () => {
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
        <div className="lists">
            <ListsMenu 
                addList={addList}
            />
            <ListsList 
                listsArray={listsArray}
                deleteList={deleteList}
            />
        </div>
    )
}

export default Lists