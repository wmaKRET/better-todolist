const Lists = () => {
    return (
        <div className="lists">
            <div className="lists__menu">
                <input
                    className="lists__menu-input"
                    placeholder="List name"
                ></input>
                <button
                    className="lists__menu-btn"
                >
                    +
                </button>
            </div>
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