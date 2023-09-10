import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';


import Layout from './components/Layout/Layout';
import Homepage from './components/Homepage/Homepage';
import Contacts from './components/Contacts/Contacts';

import './App.scss'

const App = () => (
    <>
        <Routes>
            <Route path='/' element={ <Layout /> }>
                <Route index element={ <Homepage /> }></Route>
                <Route path='/contacts' element={ <Contacts /> }></Route>
            </Route>
        </Routes>
    </>
);

export default App;
