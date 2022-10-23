import React from 'react';
import {useForm} from "react-hook-form";

import css from './SearchForm.module.css'


const SearchForm = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm({
        mode: 'all',
        defaultValues: {
            name: 'search'
        }
    });

    const searchSubmit = (title) => {
        console.log(title);
        reset();
    }

    return (
        <div className={css.formStyle}>
            <form onSubmit={handleSubmit(searchSubmit)}>
                <input type="text" {...register('search', {require: {value: true, message: 'Error'}})}/>
                {errors.name && <span>{errors.name.message}</span>}
                <button>Search</button>
            </form>
        </div>
    );
};

export {SearchForm};