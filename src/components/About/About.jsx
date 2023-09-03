import React from 'react';

import './About.scss';

const About = () => {
    return (
        <div className="about">
            <h2 className="about__header header">
                About me
            </h2>
            <div className="divider"></div>

            <div className="about__content">
                <div className="about__content-image">
                    <img src="/images/me.png" alt="My Photo" />
                </div>
                <div className="about__content-right">
                    <div className="about__content-right_text">
                        I am working  mainly on Vue.js,  but I know the basics of React.js. 
                        I have development experience in this area since 2022.
                        <br /> <br />
                        I am studying at the LETI University with a degree in 
                        Applied Mathematics and Informatics (2020-2024).
                    </div>
                    <button className="about__content-right_btn btn">
                        Go to projects
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About;