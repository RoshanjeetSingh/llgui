import react, {useEffect,useState} from 'react'
import './mainarea.css'
import { GiPiercedHeart } from "react-icons/gi";
import { LuTreePalm } from "react-icons/lu";

function MainContent(){
    return(
        <div>
        <div className='wlcmcontainer'>
            <div className='wlcm'>
                <p>
                    Welcome To My Website
                </p>
                <h2>Uplod Photos!</h2>
            </div>
       </div>
       <div className='wlcmcontainer2nd'>  

        <h2>Welcome to <strong>Lalgarh Jattan</strong> <GiPiercedHeart /> Lovely People, <LuTreePalm/>Beautiful Village.</h2>
    
       </div>
            
        </div>
    );
}
export default MainContent