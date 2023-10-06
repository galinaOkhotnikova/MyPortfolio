import React from 'react';
import { Outlet } from 'react-router-dom';

import './Layout.scss';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Layout = () => {
return (
    <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
    </div>
)}

export default Layout;