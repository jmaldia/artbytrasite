import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Social from './Social'
import Copyright from './Copyright'

const Sidebar = props => {
    return (
        <div className="sidebar" >
            <Logo />
            <Menu switchMenu="props.switchMenu"/>
            <Social />
            <Copyright />    
        </div>
    )
}

export default Sidebar