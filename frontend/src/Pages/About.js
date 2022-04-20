import React from "react";
import { FcTodoList } from "react-icons/fc";
import { BsFillBootstrapFill} from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import "../Components/Navbar/Navbar.css";

const About = () => {
  return (
    <>
      <div className="about-layout">
      <h2>Used components in this project</h2>
        <div className="about-component-box">
        
          <div className="about-component">
            <h3><strong>React Framework</strong></h3>
          </div>
          <div className="about-component">
            <h3>Made by components </h3>
            <ul><li>Navbar</li>
              <li>AddTask</li>
              <li>Button</li> 
              <li>EditTask</li>
              <li>Header</li>
              <li>Tasks</li>
              <li>Task</li>
            </ul>
          </div>
          <div className="about-component">
            <h3> <SiMysql size="70px"/></h3>
            <p>Connected with Axious library and made CRUD</p>
          </div>
          <div className="about-component">
            <h3>useState hooks</h3>
            <p>Hooks ensure that componets itself changes</p>
          </div>
          <div className="about-component">
            <h3><FcTodoList size="50px" /> Icons & Font Awesome</h3>
            <p>Icons from react-icon library</p>
          </div>
          <div className="about-component">
            <h3>Router, Switch</h3>
            <p>Ensure switching between pages as Home, About</p>
          </div>
          <div className="about-component">
            <h3>CSS library </h3>
            <p><BsFillBootstrapFill/> Bootstrap</p>
          </div>
          <div className="about-component">
            <h3>The Map() Funtion</h3>
            <p>To rendering a Tasks to browser</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default About;
