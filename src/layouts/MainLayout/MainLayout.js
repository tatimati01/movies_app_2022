import React, {useState} from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";
import css from './MainLayout.module.css'
import {ThemeProvider} from "styled-components";
import {darkTheme, GlobalStyles, lightTheme} from "../../configs";

const MainLayout = () => {


    return (
        <div className={css.mainContentDark}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>

    );
};

export {MainLayout};