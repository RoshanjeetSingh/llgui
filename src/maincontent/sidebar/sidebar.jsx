import React from "react";
import './sidebar.css';
import { NavLink } from "react-router-dom";
const Sidebar = ()=>{
    return(<div className="sidebarcontainor" style={{width:`150px`}}>
       <ul>
        
        <li><NavLink to={'/aboutpeople'}>aboutpeople</NavLink></li>
        <li><NavLink to={'/sports'}>sports</NavLink></li>
        <li><NavLink to={'/history'}>history</NavLink></li>
       </ul>
    </div>)
}
export default Sidebar