import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Header} from "../../components";

const HomePage = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {HomePage};