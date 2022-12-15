import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Logo from '../Images/logo-transparent.png';
import { Hamburger } from './Icon';

export default function Header() {
    const sideBar = useRef(null);
    const [isActive, setIsActive] = useState(false);

    const openClick = () => {
        sideBar.current.style.width = "100%";
    };
    const closeClick = () => {
        sideBar.current.style.width = "0";
    };

    return <>
        {/* <!-----Sidebar------> */}
        <aside id="mySidenav" className="sidenav" ref={sideBar}>
            <a href="#" className="closebtn" id="close-sidebar" onClick={closeClick}>&times;</a>
            <div id="mobile-nav">
                <a href="#">Invest</a>
                <a href="#">FAQs</a>
                <a href="#">Company</a>
                <a href="#">About Us</a>
                <Link to="/login" className="link-btn bg-white">Sign in</Link>
                <Link to="/signup" className="link-btn bg-blue">Create Free Account</Link>
            </div>
        </aside>
        {/* <!-----End Of Sidebar------> */}



        {/* <!-----Header------> */}
        <header id="top-header">
            <nav>
                <ul>
                    <li id="hamburger" className="svg-icons" onClick={openClick}>
                        <Hamburger />
                    </li>
                    <li className="app-logo">
                        <img src={Logo} alt="logo" />
                    </li>
                    <li id="desktop-nav">
                        <ul>
                            <li>
                                <a href="#">Invest</a>
                            </li>
                            <li>
                                <a href="#">FAQs</a>
                            </li>
                            <li>
                                <a href="#">Company</a>
                            </li>
                            <li>
                                <a href="#">About Us</a>
                            </li>
                        </ul>
                    </li>

                    <li id="app-extra">
                        {/* <Link to="/login">Sign in</Link> */}
                        <Link to="/signup" className="desktop-show">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {/* <!-----End Of Header------> */}
    </>
}