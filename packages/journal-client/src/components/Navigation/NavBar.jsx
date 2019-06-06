import React from 'react';
import { Link, Route } from 'react-router-dom';

export default ({ user }) => {
    return (
        <nav className="nav">
            { user !== null && <Link to="/logout">Logout</Link> }
        </nav>
    );
};
