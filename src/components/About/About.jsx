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
                        I have 1 year of development experience, being proficient in Vue.js and knowing the basics of React.js.
                        <br/>
                        I study at the Saint Petersburg Electrotechnical University 
                        "LETI" for a bachelor's degree in Applied Mathematics and Computer Science (2020-2024).
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