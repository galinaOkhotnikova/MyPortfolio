import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage';
import Contacts from './components/Contacts/Contacts';
import Projects from './components/Projects/Projects';
import Page404 from './components/404/Page404';

import './App.scss'

const App = () => (
    <>  
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route index element={ <Homepage /> }></Route>
                <Route path='contacts' element={ <Contacts /> }></Route>
                <Route path='projects' element={ <Projects /> }></Route>
                <Route path='*' element={ <Page404 /> }></Route>
            </Route>
        </Routes>
    </>
);

export default App;
