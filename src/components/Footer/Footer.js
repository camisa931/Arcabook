import React from 'react';

import logoFooter from '../../images/arcabook-1-crop.png'

import classes from './Footer.module.css';

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <ul>
                <img src={logoFooter} alt="" />
            </ul>

            <ul>
                <li>About</li>
                <li>Contact</li>
                <li>Github</li>
            </ul>
        </div>
    );
};

export default Footer;