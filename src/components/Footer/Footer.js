import React from 'react';

import css from './Footer.module.css'

const Footer = () => {
    return (
        <div className={css.footer}>
            Created by <a href='https://github.com/tatimati01'>TatiMati01</a>
        </div>
    );
};

export {Footer};