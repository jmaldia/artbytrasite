import React from 'react'

const Menu = props => {
    return (
        <div className="menu">
            <button onClick={() => props.switchPage('home')}>Home</button>
            <button onClick={() => props.switchPage('contact')}>Contact</button>
            <button onClick={() => props.switchPage('about')}>About</button>
        </div>
    )
}

export default Menu