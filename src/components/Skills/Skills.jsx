import React from 'react';

import './Skills.scss';

const Skills = () => {
    return (
        <div className="skills">
            <h2 className="skills__header header">Skills</h2>
            <div className="divider"></div>
            <div className="skills__content">
                <div className="skills__content-left">
                    <div className="skills__content-left-top block">
                        <h3 className="header3">
                            Frontend
                        </h3>
                        <p className="paragraph">
                            — JS, HTML, CSS, Sass, Pug, GraphQL, Axios, Vue.js, 
                            Vuex, Vuetify, Pinia, Vite, React.js
                        </p>
                    </div>
                    <div className="skills__content-left-bottom block">
                        <h3 className="header3">
                            General
                        </h3>
                        <p className="paragraph">
                            — Git, NPM, Algorithms & Data structures, Figma, Jira
                        </p>
                    </div>
                </div>
                <div className="skills__content-right">
                    <div className="skills__content-right-top block">
                        <h3 className="header3">
                            Backend
                        </h3>
                        <p className="paragraph">
                            — Node.js, Express, Apollo Server
                        </p>
                    </div>
                    <div className="skills__content-right-bottom block">
                        <h3 className="header3">
                            Soft
                        </h3>
                        <p className="paragraph">
                            — communicative, hard-working, teamworking, creative 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;