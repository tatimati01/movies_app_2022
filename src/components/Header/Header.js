import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {SearchForm} from '../SearchForm/SearchForm';
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    // const themeSwitcher = (e) => {
    //     e.preventDefault();
    //
    // }

    return (
        <div className={css.header}>
            <div className={css.navbar}>
                <NavLink to={'/'}>THE Movie APP</NavLink>
                <NavLink to={'/movies'}>Movies</NavLink>
                <NavLink to={'/genres'}>Genres</NavLink>
            </div>

            <div>
                <SearchForm/>
            </div>

            <div>
                <UserInfo/>
            </div>

            {/*<button onClick={themeSwitcher(e)}>Light / Dark</button>*/}
        </div>
    );
};

export {Header};