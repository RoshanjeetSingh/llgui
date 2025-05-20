import React from "react";
import './sidebar.css';
import { Link } from "react-router-dom";
const Sidebar = ()=>{
    return(<div className="sidebarcontainor" style={{width:`150px`}}>
       <ul>
        <li><Link to="/aboutpeople">aboutpeople</Link></li>
        <li><Link to="/history">history</Link></li>
        <li><Link to="/sports">sports</Link></li>
       </ul>
    </div>)
}
export default Sidebar