import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import LogoutContainer from '../Authentication/LogoutContainer';
import Dashboard from './Dashboard';
import NavBarContainer from '../Navigation/NavBarContainer';
import LoginContainer from '../Authentication/LoginContainer';

export default class App extends React.Component {
    render () {
        const { user } = this.props;

        if (user.token === null && this.props.router.location.pathname !== '/login') {
            return <Redirect to="/login"/>;
        }

        return (
            <BrowserRouter>
                <Route path="/logout" component={LogoutContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <div className="app">
                    <NavBarContainer/>
                    <Dashboard/>
                </div>
            </BrowserRouter>
        )
    }
}
