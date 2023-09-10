import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='/' className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/projects' className="link">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="/contacts" className="link">
                        Contacts
                    </Link>
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
                                    <Link to='/' className='link'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link t0='/projects' className='link'>
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/contact' className='link'>
                                        Contacts
                                    </Link>
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
