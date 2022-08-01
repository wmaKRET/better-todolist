import React, { useEffect, useState } from "react"

const Context = React.createContext()

const ContextProvider = ({ children }) => {
    const getLocalStorage = () => localStorage.getItem('wmakret-better-todolist')
        ? JSON.parse(localStorage.getItem('wmakret-better-todolist'))
        : []

    // holds created lists
    const [listsArray, setListsArray] = useState(getLocalStorage())
    // holds active list (used to show its tasks)
    const [activeListID, setActiveListID] = useState(0)
    // defines if Tasks component should animate in or animate out 
    const [showTasks, setShowTasks] = useState(false)

    useEffect(() => {
        localStorage.setItem('wmakret-better-todolist', JSON.stringify(listsArray))
    }, [listsArray])

    // returns new list object
    const createList = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        tasks: []
    })

    // returns new task object
    const createTask = (inputValue) => ({
        id: Date.now().toString(),
        value: inputValue,
        isCompleted: false
    })

    // adds new list to lists array
    const addList = (inputValue) => {
        const newList = createList(inputValue)
        setListsArray(prevLists => [...prevLists, newList])
        setActiveListID(newList.id)
    }

    // switches active list between every list in array
    const toggleActiveList = (listID) => {
        const activeList = listsArray.filter(list => list.id === listID)
        setActiveListID(activeList[0].id)
    }

    // deletes list from lists array
    const deleteList = (listID) => {
        if (activeListID === listID) setActiveListID(0)
        setListsArray(prevLists => prevLists.filter(list => list.id !== listID))
    }

    // adds task to active list
    const addTaskToList = (taskName) => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: [...list.tasks, createTask(taskName)] }
            : list
        ))
    }

    // switches value (true/false) of taks completion
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

    // deletes task in active list
    const deleteTaskFromList = (taskID) => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: list.tasks.filter(task => task.id !== taskID) }
            : list
        ))
    }

    // deletes completed tasks in active list
    const deleteCompletedTasks = () => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: list.tasks.filter(task => !task.isCompleted) }
            : list
        ))
    }

    // clears tasks array in active list
    const deleteAllTasks = () => {
        setListsArray(prevLists => prevLists.map(list => list.id === activeListID
            ? { ...list, tasks: [] }
            : list
        ))
    }

    // animates Tasks component in
    const animateTasksIn = () => setShowTasks(true)

    // animates Tasks component out
    const animateTasksOut = () => setShowTasks(false)

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
                // animation values
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