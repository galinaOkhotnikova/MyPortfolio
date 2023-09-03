import React from 'react';

import './Landing.scss';

const Landing = () => {
    return (
        <div className="landing">
            <img src="/images/3dEl.svg" alt="3d"/>
            <div className="landing__text">
                <h2 className="landing__text-name">
                    My name is <span>Galina</span>
                </h2>
                <p className="landing__text-about">
                            I'm a frontend developer
                </p>
            </div>
            <div className="landing__button">
                <button className="landing__button-button btn">
                    Download CV
                </button>
            </div>
        </div>
    )
}


export default Landing;