import React from 'react';

import './SmallCard.scss';

const SmallCard = ({name, img}) => {
    return (
        <div>
            <div className='smallcard'>
                <img className='smallcard__img' src={img} />
                <span className="smallcard__mask">
                    <span className="smallcard__name">{ name }</span>
                </span>
            </div>
        </div>
    )};

export default SmallCard;    