import { useContext, useState } from "react"
import { Context } from "../../Context"
import { MdOutlineAddBox } from "react-icons/md"

const ListsMenu = () => {
    const TIMOUET_IN_MS = 1000
    const { addList } = useContext(Context)
    const [listInputValue, setListInputValue] = useState("")
    const [isAddButtonDisabled, setIsAddButtonDisabled] = useState(false)

    const handleChange = (event) => {
        const { value } = event.target
        setListInputValue(value)
    }

    const disableButton = () => {
        setIsAddButtonDisabled(true)
        setTimeout(() => {
            setIsAddButtonDisabled(false)
        }, TIMOUET_IN_MS)
    }

    const handleAddButton = (valueFromInput) => {
        if (listInputValue.length !== 0) {
            disableButton()
            addList(valueFromInput)
            setListInputValue("")
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