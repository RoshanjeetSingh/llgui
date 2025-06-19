import React,{useState,useEffect} from "react";
import '../assets/llglogo.png'
import { IoMdSearch } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './header.css'
import ResponciveNav from './responcivenav'
import { NavLink } from "react-router-dom";
function WebHeader(){
    return(
        <div>
            <header>
      <span ><img className="llglogo" src="src/assets/llgfort.png" alt=""/></span>

      <div className="sharebtnscontainor">
        <ul className="sharebtns">
            <li id="like"> <AiOutlineLike/>like</li>
            <li id="share"><FaShare/>share</li>
            <li id="sharefb"><h4><FaFacebookF/>share this web</h4></li>
        </ul>
        
     </div>
      <div className="searcharea">
        <form action="#" method="post">
        <input type="text" placeholder="search herr" /> <span id="SearchIcon"><IoMdSearch id="searchicon" /></span>

        </form>
      </div>
      
      <nav>
        <ul className="navbar">
            <li className="navbtn"> <NavLink  className={"lin"} to={'/'}>home</NavLink>                  </li>
            <li className="navbtn"> <NavLink  className={"lin"} to={'/villages'} >village map</NavLink>  </li>
            <li className="navbtn">  <NavLink className={"lin"} to={'/guestbook'}>guest book </NavLink></li>
            <li className="navbtn"> <NavLink  className={"lin"} to={'/gallary'}> gallary     </NavLink></li>
            <li className="navbtn">  <NavLink className={"lin"} to={'/videos'}>videos        </NavLink> </li>
            <li className="navbtn">  <NavLink className={"lin"} to={'/news'}>submit news     </NavLink></li>
        </ul>
      </nav>
    <ResponciveNav />
    
    </header>
        </div>
        
    )
  }
export default WebHeader