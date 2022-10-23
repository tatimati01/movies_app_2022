import React from 'react';
import {useForm} from "react-hook-form";

import css from './SearchForm.module.css'
import {useNavigate, useSearchParams} from "react-router-dom";


const SearchForm = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'search'
        }
    });

    const navigator = useNavigate();

    const [query, setQuery] = useSearchParams();

    const searchSubmit = (e) => {
        setQuery({query: e.search})
        reset();
    }

    return (
        <div className={css.formStyle}>
            <form onSubmit={handleSubmit(searchSubmit)}>
                <input type="text" {...register('search', {require: {value: true, message: 'Error'}})}/>
                {errors.name && <span>{errors.name.message}</span>}
                <button onClick={(e)=> {
                    e.preventDefault()
                    navigator(`/search`)}}>Search</button>
            </form>
        </div>
    );
};

export {SearchForm};