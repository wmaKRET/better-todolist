import React, { useState } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
    /* --- // --- //  // --- // --- */
    const [listsArray, setListsArray] = useState([])
    const [activeListID, setActiveListID] = useState(0)
    /* --- // --- //  // --- // --- */
    const [showTasks, setShowTasks] = useState(false)

    /* --- // --- //  // --- // --- */
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

    /* --- // --- //  // --- // --- */
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
        setListsArray(prevLists => prevLists.filter(list => list.id !== listID))
    }

    const addTaskToList = (taskName) => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: [...list.tasks, createTask(taskName)] }
            : list
        ))
    }

    /* --- // --- //  // --- // --- */
    const toggleTaskCompletion = (taskID) => {
        setListsArray(prevLists => prevLists.map(list => list.id !== activeListID
            ? list
            : {
                ...list, tasks: list.tasks.map(task => task.id === taskID
                    ? { ...task, isCompleted: !task.isCompleted }
                    : task
                )
            }
        ))
    }

    const deleteTaskFromList = (taskID) => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: list.tasks.filter(task => task.id !== taskID) }
            : list
        ))
    }

    const deleteCompletedTasks = () => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: list.tasks.filter(task => !task.isCompleted) }
            : list
        ))
    }

    const deleteAllTasks = () => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: [] }
            : list
        ))
    }

    /* --- // --- //  // --- // --- */
    const animateTasksIn = () => setShowTasks(true)

    const animateTasksOut = () => setShowTasks(false)

    console.log(showTasks)
    
    return (
        <Context.Provider
            value={{
                listsArray,
                activeListID,
                addList,
                toggleActiveList,
                deleteList,
                addTaskToList,
                toggleTaskCompletion,
                deleteTaskFromList,
                deleteCompletedTasks,
                deleteAllTasks,
                showTasks,
                animateTasksIn,
                animateTasksOut
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }