import React from 'react';
import {useNavigate} from "react-router-dom";
import css from "../MovieCard/MovieCard.module.css";

const Genre = ({genre}) => {
    const {name} = genre;
    const navigator = useNavigate();
    return (
        <div>

            <div className={css.btnDetails}>
                <button onClick={() => navigator(name.toString())}>{name}</button>
            </div>
        </div>
    );
};

export default Genre;