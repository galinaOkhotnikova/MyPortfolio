import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

import './App.scss'

const App = () => (
    <div>
        <Navbar />
        <Landing />
        <About />
        <Skills />
        <Footer />
        {/* <Contacts /> */}
    </div>
);

export default App;
