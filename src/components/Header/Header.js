import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {SearchForm} from '../SearchForm/SearchForm';
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {

    return (
        <div className={css.header}>
            <div className={css.navbar}>
                <NavLink to={'/'} className={css.navbar}>THE Movie APP</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>

            <div>
                <SearchForm/>
            </div>

            <div>
                <UserInfo/>
            </div>

            {/*<button onClick={switchTheme()}>Light / Dark</button>*/}
        </div>
    );
};

export {Header};