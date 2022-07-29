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

    return (
        <div className="lists">
            <ListsMenu />
            <ListsList />
        </div>
    )
}

export default Lists