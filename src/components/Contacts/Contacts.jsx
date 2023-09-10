import React from 'react';

import './Contacts.scss';


const Contacts = ()=> {
    return (
    <div className="contacts" id="contacts">
        <h2 className="contacts__header header">
            Contacts
        </h2>
        <div className="divider"></div>
        <div className="contacts__list">
            <ul>
                <li>
                    <h3>
                        Location
                    </h3>
                    <p>
                        Russia, Saint-Petersburg
                    </p>
                </li>
                <li>
                    <h3>
                        Github
                    </h3>
                    <p>
                        <a href='ttps://github.com/galinaOkhotnikova'>
                            https://github.com/galinaOkhotnikova
                        </a>
                    </p>
                </li>
                <li>
                    <h3>
                        Telegram
                    </h3>
                    <p>
                        <a href='https://t.me/Galya19O6'>
                            https://t.me/Galya19O6
                        </a>
                    </p>
                </li>
                <li>
                    <h3>
                        Email
                    </h3>
                    <p>
                        ohotnikovagalinaa@gmail.com
                    </p>
                </li>
            </ul>
        </div>
    </div>

)};

export default Contacts;