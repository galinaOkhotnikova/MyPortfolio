import React from 'react';

import './Landing.scss';

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__text">
                <h2 className="landing__text-name">
                    My name is <span>Galina</span>
                </h2>
                <p className="landing__text-about">
                    I'm a frontend developer
                </p>
            </div>
            <div className="landing__button">
                <a className="landing__button-button btn" href="/files/resume.pdf" download="OkhotnikovaGSResume.pdf">
                    Download CV
                </a>
            </div>
            {/* <img src="/images/3dEl.svg" alt="3d"/> */}
        </div>
    )
}


export default Landing;