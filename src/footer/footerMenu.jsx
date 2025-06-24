import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CiInstagram } from "react-icons/ci";
function FooterMenu() {
    return (
        <div className="footer-menu">
            <ul>
                <li><h3>ABOUT</h3></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
            </ul>
            <ul>
                <li><h3>VILLAGE UPDATES</h3></li>
                <li><a href="/news">Latest News</a></li>
                <li><a href="/events">Upcoming Events</a></li>
                <li><a href="/gallery">Photo Gallery</a></li>
            </ul>
            <ul>
                <li><h3>FOLLOW US</h3></li>
                <li><a href="https://www.facebook.com/lalgarhjattan" target="_blank" rel="noopener noreferrer"><CiFacebook/></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><CiInstagram/></a></li>
            </ul>
        </div>
    );
}
export default FooterMenu