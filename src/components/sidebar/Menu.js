import React from 'react'

const Menu = props => {
    return (
        <div className="menu">
            <a href="#" onclick="props.switchPage">Home</a>
            <a href="#" onclick="props.switchPage">Contact</a>
        </div>
    )
}

export default Menu