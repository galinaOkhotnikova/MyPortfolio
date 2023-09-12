import React from 'react';
import {  Link } from 'react-router-dom';
import './Page404.scss';

const Page404 = () => {
    return (
        <div className="page404">
            <div className="page404__left">
                <div className="page404__left-text">
                    <h2>
                        Page not found
                    </h2>
                    <p>
                        Sorry, but the page you requested doesn’t exist
                    </p>
                </div>
                <div className="page404__left-button">
                    <Link to='/' className="page404__left-button-btn btn">
                        Go home
                    </Link>
                </div>
            </div>
            <img src='/images/404.svg' alt="404Img" />
        </div>
    )
};

export default Page404;