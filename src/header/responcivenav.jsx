import React, {useState}from "react";
import { NavLink } from "react-router-dom";
import './header.css'
function ResponciveNav(){

    const [burgerclass, setburgerclass] = useState("burgerbar unclicked");
    const [ismenuclicked, setismenuclicked] =useState(false);
    const [isvisible, setisvisible]= useState(false)

    function updatemenu(){
        if(!ismenuclicked){
            setburgerclass("burgerbar clicked")
            setisvisible(!isvisible)
        }
        else{
            setburgerclass("burgerbar unclicked")
            setisvisible(!isvisible)
        }
        setismenuclicked(!ismenuclicked)
    }
    return(
        <div className="responcivenav" >
            <nav>
                <div className="burger-menu" onClick={updatemenu}>
                    <div className={burgerclass}></div>
                    <div className={burgerclass}></div>
                    <div className={burgerclass}></div>
                </div>
                {
                    isvisible &&(
                        <ul className={`navlist ${isvisible?'show':''}`} >
                            {/* <a href="#"><li className="navlinks">home </li></a> 
                            <a href="#"><li className="navlinks">village map   </li></a>
                            <a href="#"><li className="navlinks">guest book    </li></a>
                            <a href="#"><li className="navlinks">gallary       </li></a> 
                            <a href="#"><li className="navlinks">videos        </li></a>
                            <a href="#"><li className="navlinks">submit news   </li></a> */}
            <li  > <NavLink   className="navlinks" to={'/'}>                home       </NavLink>  </li>
            <li  > <NavLink   className="navlinks" to={'/villages'} >       village map</NavLink>  </li>
            <li  >  <NavLink  className="navlinks" to={'/guestbook'}>       guest book </NavLink>  </li>
            <li  > <NavLink   className="navlinks" to={'/gallary'}>         gallary    </NavLink>  </li>
            <li  >  <NavLink  className="navlinks" to={'/videos'}>          videos     </NavLink>  </li>
            <li  >  <NavLink  className="navlinks" to={'/news'}>            submit news</NavLink>  </li>

                        </ul>
                    )
                }
           </nav>
        </div>
    );
}
export default ResponciveNav