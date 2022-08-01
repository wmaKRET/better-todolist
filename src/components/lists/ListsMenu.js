import { useContext, useState } from "react"
import { Context } from "../../Context"
import { MdOutlineAddBox } from "react-icons/md"

const ListsMenu = () => {
    const TIMEOUT_IN_MS = 1000
    const { addList, animateTasksIn } = useContext(Context)
    // holds current input value (updates on change)
    const [listInputValue, setListInputValue] = useState("")
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false)

    // updates listInputValue state on change
    const handleChange = (event) => {
        const { value } = event.target
        setListInputValue(value)
    }

    // disables add button to prevent multiple clicks
    const disableButton = () => {
        setIsAddButtonDisabled(true)
        setTimeout(() => {
            setIsAddButtonDisabled(false)
        }, TIMEOUT_IN_MS)
    }

    // adds new list to lists array
    const handleAddButton = (valueFromInput) => {
        if (listInputValue.length !== 0) {
            disableButton()
            addList(valueFromInput)
            setListInputValue("")
            animateTasksIn()
        } else disableButton()
    }

    return (
        <div className="lists__menu">
            <input
                className="lists__menu-input"
                type="text"
                placeholder="add new list..."
                name="listInputValue"
                value={listInputValue}
                onChange={handleChange}
            ></input>
            <button
                className="lists__menu-btn"
                onClick={() => handleAddButton(listInputValue)}
                disabled={isAddButtonDisabled}
            >
                <MdOutlineAddBox size={24} />
            </button>
        </div>
    )
}

export default ListsMenu