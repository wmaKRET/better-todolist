import { useContext } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { Context } from "../../Context"
import ListItem from "./ListItem"

const ListsList = () => {
    const { listsArray } = useContext(Context)

    const listElements = listsArray.map(list => (
        <CSSTransition
            key={list.id}
            timeout={100}
            classNames="animate-list-item"
        >
            <ListItem list={list} />
        </CSSTransition>
    ))

    return (
        <div className="lists__list">
            <TransitionGroup>
                {listElements}
            </TransitionGroup>
        </div>
    )
}

export default ListsList