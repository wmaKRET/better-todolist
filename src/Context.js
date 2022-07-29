import React, {useEffect, useState } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
    const [listsArray, setListsArray] = useState([])
    const [activeListID, setActiveListID] = useState(0)

    const createList = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        tasks: []
    })

    const createTask = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        isCompleted: false
    })

    const addList = (inputValue) => {
        const newList = createList(inputValue)
        setListsArray(prevLists => [...prevLists, newList])
        setActiveListID(newList.id)
    }

    const toggleActiveList = (listID) => {
        const activeList = listsArray.filter(list => list.id === listID)
        setActiveListID(activeList[0].id)
    }  

    const deleteList = (listID) => {
        if (activeListID === listID) setActiveListID(0)
        setListsArray(prevLists => prevLists.filter(list => list.id != listID))
    }

    const addTaskToList = (taskName) => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: [...list.tasks, createTask(taskName)] }
            : list
        ))
    }

    return (
        <Context.Provider
            value={{
                listsArray,
                activeListID,
                addList,
                toggleActiveList,
                deleteList,
                addTaskToList
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }