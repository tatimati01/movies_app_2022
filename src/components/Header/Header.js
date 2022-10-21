import React from 'react';

import {SearchForm} from "../SearchForm/SearchForm";
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div>
            <div>Logo</div>
            <SearchForm/>
            <UserInfo/>
        </div>
    );
};

export {Header};