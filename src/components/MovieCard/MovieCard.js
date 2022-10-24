import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './MovieCard.module.css'
import {imageURL} from "../../configs";

const MovieCard = ({movie}) => {
    const {id, original_title, title, overview, backdrop_path} = movie;

    const navigator = useNavigate();

    return (
        <div className={css.movieItem}>

            <div className={css.imageBox}>
                <img src={`${imageURL}/w200${backdrop_path}`} alt={title}/>
            </div>

            <div className={css.titleBox}>
                <h3>{title} ({original_title})</h3>
            </div>

            <div className={css.overviewBox}>
                <p>{overview}</p>
            </div>

            <div className={css.btnDetails}>
                <button onClick={() => navigator(id.toString())}>Details</button>
            </div>

        </div>
    );
};

export {MovieCard};