import { useState } from "react"

const ListsMenu = ({ addList }) => {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        const { value } = event.target
        setInputValue(value)
    }

    const handleAddButton = (valueFromInput) => {
        addList(valueFromInput)
        setInputValue("")
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
            >
                +
            </button>
        </div>
    )
}

export default ListsMenu