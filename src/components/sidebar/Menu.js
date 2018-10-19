import React from 'react'

const Menu = props => {
    console.log(props) 
    return (
        <div className="menu">
            <button onClick={() => props.switchPage('home')}>Home</button>
            <button onClick={() => props.switchPage('contact')}>Contact</button>
        </div>
    )
}

export default Menu