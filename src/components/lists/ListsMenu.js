import { useState } from "react"

import { MdOutlineAddBox } from "react-icons/md"

const ListsMenu = ({ addList }) => {
    const TIMOUET_IN_MS = 1000
    const [inputValue, setInputValue] = useState("")
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false)

    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const disableButton = () => {
        setIsAddButtonDisabled(true)
        setTimeout(() => {
            setIsAddButtonDisabled(false)
        }, TIMOUET_IN_MS)
    }

    const handleAddButton = (valueFromInput) => {
        if (inputValue.length !== 0) {
            disableButton()
            addList(valueFromInput)
            setInputValue("")
        } else disableButton()
    }

    return (
        <div className="lists__menu">
            <input
                type="text"
                className="lists__menu-input"
                placeholder="add new list..."
                value={inputValue}
                onChange={handleChange}
            ></input>
            <button
                className="lists__menu-btn"
                onClick={() => handleAddButton(inputValue)}
                disabled={isAddButtonDisabled}
            >
                <MdOutlineAddBox size={24} />
            </button>
        </div>
    )
}

export default ListsMenu