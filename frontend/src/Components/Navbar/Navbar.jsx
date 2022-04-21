import React from 'react'
import MenuItems from './MenuItems'
import  './Navbar.css'
import { FcTodoList} from "react-icons/fc"
import { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {

const [clicked, setClicked] = useState(false);
  
const handleClick= () => {
     {setClicked(!clicked)}
 }


  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo"><FcTodoList size="50px" /></h1>
        
        <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
        <li><Link to='about'>About</Link></li>
        <li><Link to='/'>Home</Link></li>
           
        </ul>


    </nav>
  )
}

export default Navbar