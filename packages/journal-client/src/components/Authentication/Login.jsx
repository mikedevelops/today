import React from 'react';
import { Redirect } from 'react-router';

export default ({ user, submit }) => {
    const handleSubmit = event => {
        event.preventDefault();
        submit(new FormData(event.target));
    };

    // If the user has a token, redirect to home
    if (user.token !== null) {
        return <Redirect to="/"/>;
    }

    return (
        <form onSubmit={handleSubmit} className="auth">
            <label htmlFor="username">Email Address</label>
            <input autoComplete="true" type="email" id="username"/>

            <label htmlFor="password">Password</label>
            <input autoComplete="true" type="password" id="password"/>

            <button type="submit">Login</button>
        </form>
    );
};
