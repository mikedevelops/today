import React from 'react';
import { Redirect } from 'react-router';
import { formDataToObject } from '../../utilities/form';

export default ({ user, submit }) => {
    const handleSubmit = event => {
        const data = new FormData(event.target);

        event.preventDefault();
        submit(formDataToObject(data));
    };

    // If the user has a token, redirect to home
    if (user.token !== null) {
        return <Redirect to="/"/>;
    }

    return (
        <form onSubmit={handleSubmit} className="auth">
            <label htmlFor="username">Email Address</label>
            <input autoComplete="true" name="username" type="email" id="username"/>

            <label htmlFor="password">Password</label>
            <input autoComplete="true" name="password" type="password" id="password"/>

            <button type="submit">Login</button>
        </form>
    );
};
