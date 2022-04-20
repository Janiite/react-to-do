import React from 'react'
import MenuItems from './MenuItems'
import  './Navbar.css'
import { FcTodoList} from "react-icons/fc"
import { useState } from "react";
import { BrowserRouter as Router, Switch, 
    Route, Redirect,} from "react-router-dom";
    import { Link } from "react-router-dom";


const Navbar = () => {

const [clicked, setClicked] = useState(false);
  
const handleClick= () => {
     {setClicked(!clicked)}
 }


  return (
    <nav className="NavbarItems">
        <h1 className="navbar-logo"><FcTodoList size="50px" /></h1>
        <div className="menu-icon" onClick={handleClick}>
             <i className = {clicked ? 'fas fa-times' : 'fas fa-bars'}>   </i>
            
        </div>
        <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
            {MenuItems.map((item, index) => {
                return(
                       <li key={index}><a className={item.cName} href={item.url}target="_blank">
                                {item.title} 
                            </a>
                        </li>
                )

            })}
         
        </ul>


    </nav>
  )
}

export default Navbar