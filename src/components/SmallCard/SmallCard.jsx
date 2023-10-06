import React from 'react';

import './SmallCard.scss';

const SmallCard = ({img, name}) => {
    return (
        <div className='wrapper'>
            <div className='smallcard'>
                <div className="smallcard__image" style={{backgroundImage: `url(${img})`}}></div>
                <span className="smallcard__mask">
                    <span className="smallcard__name">{ name }</span>
                </span>
            </div>
        </div>
    )};

export default SmallCard;    