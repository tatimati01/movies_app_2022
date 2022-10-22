import React from 'react';
import {useForm} from "react-hook-form";

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
        <form onSubmit={handleSubmit(searchSubmit)}>
            <input type="text" {...register('search', {require: {value: true, message: 'Error'}})}/>
            {errors.name && <span>{errors.name.message}</span>}
            <button>Search</button>
        </form>
    );
};

export {SearchForm};