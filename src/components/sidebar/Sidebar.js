import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Footer from './Footer'

const Sidebar = props => {
    return (
        <div className="sidebar" >
            <Logo />
            <Menu switchMenu={props.switchPage}/>
            <Footer />
        </div>
    )
}

export default Sidebar