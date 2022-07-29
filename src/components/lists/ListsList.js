import { useContext } from "react"
import { Context } from "../../Context"
import ListItem from "./ListItem"

const ListsList = () => {
    const { listsArray } = useContext(Context)

    const listElements = listsArray.map(list => (
        <ListItem
            key={list.id}
            list={list}
        />
    ))

    return (
        <div className="lists__list">
            {listElements}
        </div>
    )
}

export default ListsList