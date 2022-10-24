import React, {useState} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css'
import {SearchForm} from '../SearchForm/SearchForm';
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    // const [theme, setTheme] = useState("light");
    //
    // const switchTheme = () => {
    //     theme === "light" ? setTheme("dark") : setTheme("light");
    // };

    return (
        <div className={css.header}>
            <div className={css.navbar}>
                <NavLink to={'/'} className={css.appLogo} className={css.navbar}>THE Movie APP</NavLink>
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