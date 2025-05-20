import React,{useState,useEffect} from "react";
import '../assets/llglogo.png'
import { IoMdSearch } from "react-icons/io";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './header.css'
import ResponciveNav from './responcivenav'
function WebHeader(){
    return(
        <div>
            <header>
      <span ><img className="llglogo" src="src/assets/llglogo.png" alt=""/></span>

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
            <li className="navbtn">home</li>
            <li className="navbtn">village map</li>
            <li className="navbtn">guest book</li>
            <li className="navbtn">gallary</li>
            <li className="navbtn">videos</li>
            <li className="navbtn">submit news</li>
        </ul>
      </nav>
    <ResponciveNav />
    
    </header>
        </div>
        
    )
  }
export default WebHeader