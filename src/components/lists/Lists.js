const Lists = () => {
  return (
    <div className="lists">
        <div className="lists__menu">
            <input placeholder="List name"></input>
            <button>+</button>
        </div>
        <div className="lists__list">
            <div className="lists__list-item">
                <p>list name</p>
                <p>5</p>
                <p>/</p>
                <p>2</p>
                <p>x</p>
            </div>
        </div>
    </div>
  )
}

export default Lists