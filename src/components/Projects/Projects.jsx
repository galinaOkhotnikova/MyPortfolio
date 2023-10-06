import React from 'react';

import './Projects.scss';

import SmallCard from '../SmallCard/SmallCard';
import data from '../../data.json';

const Projects = () => {
    const items = data;
    console.log(items);
    return (
        <div className='projects'>
            <h2 className="projects__header header">
                Projects
            </h2>
            <div className="divider"></div>
            <div className='projects__items'>
                {items.map((item) => (
                    <SmallCard key={item.id} {...item} />
                ))}
            </div>
        </div>
        )
}

export default Projects;