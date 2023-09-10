import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseFill} from 'react-icons/ri';

import './Navbar.scss';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = React.useState(false); 

    return (
        <div className="navbar">
            <div className="navbar__logo">
                My portfolio
            </div>
            <div className="navbar__links">
                <li>
                    <a>
                        Home
                    </a>
                </li>
                <li>
                    <a>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contacts">
                        Contacts
                    </a>
                </li>
            </div>
            <div className="navbar__smallscreen">
                <GiHamburgerMenu  className="navbar__smallscreen-hamburger" color="#fff" fontSize={27} cursor="pointer" onClick={() => setToggleMenu(true)}/>
                {
                    toggleMenu && (
                        <div className="navbar__smallscreen_overlay"> 
                            <RiCloseFill color="#fff"  className="overlay__close" fontSize={27} cursor="pointer" onClick={() => setToggleMenu(false)} />
                            <ul className="navbar__smallscreen_overlay-list">
                                <li>
                                    <a>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Projects
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        Contacts
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;
