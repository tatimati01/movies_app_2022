import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Genre.css';

const Genre = ({genre}) => {
    const {name,id} = genre;
    const navigator = useNavigate();

    return (
        <div>
            <div className={css.btnDetails}>
                <button onClick={() => navigator(`movies?with_genres=${id}`)}>{name}</button>
            </div>
        </div>
    );
};

export default Genre;