import './mainarea.css'
import { GiPiercedHeart } from "react-icons/gi";
import { LuTreePalm } from "react-icons/lu";
import { Outlet } from 'react-router-dom';


import Sidebar from '../maincontent/sidebar/sidebar.jsx'

function HomePage(){
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
       <div id='sidebar' style={{display:`flex`,}}>

<Sidebar/>
    <div style={{ marginLeft: '20px', flex: 1 }}>     
    <Outlet />
    </div>
        </div>
</div>
    );
}
export default HomePage