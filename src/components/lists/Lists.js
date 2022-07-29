import { useState } from "react"

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
            <div className="lists__list">
                <div className="lists__list-item">
                    <div className="lists__list-item__details">
                        <p>5</p>
                        <p>/</p>
                        <p>2</p>
                    </div>
                    <div className="lists__list-item__name">
                        <p>list name</p>
                    </div>
                    <div className="lists__list-item__delete">
                        <p>X</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lists