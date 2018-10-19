import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'

const Sidebar = props => {
    return (
        <div className="sidebar" >
            <Logo />
            <Menu switchPage={props.switchPage}/>
            <Footer />
        </div>
    )
}

export default Sidebar