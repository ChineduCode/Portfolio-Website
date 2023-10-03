'use client'

import Nav from "./Nav";
import HireMe from "./Hire_Me";
import { FaBars } from 'react-icons/fa6'
import { useState } from "react";

const Header = () => {
    
    let [toggleNav, setToggleNav] = useState(false)

    return (
        <header>
            <div className="logo">ChineduCode.</div>

            <Nav setToggleNav={setToggleNav} toggleNav={toggleNav}/>

            <div className="menu_icon_hire_me">
                <div className="menu-icon" onClick={()=> setToggleNav(true)}> <FaBars size={25} /> </div>
                <HireMe />
            </div>
        </header>
    );
}

export default Header;