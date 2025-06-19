import React from "react";
import { FaBluesky } from "react-icons/fa6";
import { PiCopyrightThin } from "react-icons/pi";
import FooterMenu from "./footerMenu";
import './footer.css'
function FooterBanner(){
    return(
            <div>
                <FooterMenu/>
            <footer className="FooterBanner">
            <h1 id="bticon">{<FaBluesky />}</h1>
            <ul>
                <li><PiCopyrightThin /> Copyright 2025 Lalgarhjattan.com .All Rights Reserved | Dveloped by Roshanjeetsingh</li>
            </ul>
            </footer>
            </div>
    )
}
export default FooterBanner