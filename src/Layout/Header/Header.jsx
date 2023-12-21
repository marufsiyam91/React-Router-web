import React from 'react'
import './Header.css'
import { MdOutlineSegment } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'
import logo from '../../assets/Images/Logo.png'

const Header = () => {
  return (
    <div>
          <section className="container">
               
        
            <header class="navigation-area">
                <div class="navigation">
                    <div class="logo-input-area">
                        <div class="logo-area">
                            <img src={logo} alt="" />
                        </div>
            
                        <div class="search-area">
                            <input type="search" placeholder="Anything you want to know"/>
                            <i class="ri-search-2-line"></i>
                        </div>
                    </div>
        
                    <input id="check" type="checkbox"/>
                    <label id="open" for="check"><p><MdOutlineSegment /></p></label>
                    <label id="close" for="check"><p><IoCloseCircleOutline /></p></label>
        
                    <div class="main-menu">
                        
                        <ul>
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                            <li><Link to={"/service"}>Services</Link></li>
                            <li><Link to={"/contact"}>Contact</Link></li>
                            <li><Link></Link></li>
                            <li><Link to={"/Log-in"}>Log-in</Link></li>
                        </ul>
                    </div>
            
                </div>
            </header>
        </section>
    </div>
  )
}

export default Header
