import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import LogoutContainer from '../Authentication/LogoutContainer';
import DashboardContainer from './DashboardContainer';
import NavBarContainer from '../Navigation/NavBarContainer';
import LoginContainer from '../Authentication/LoginContainer';
import { whyDidYouUpdate } from 'why-did-you-update/es';

// TODO: Remove this on production
// whyDidYouUpdate(React);

export default class App extends React.Component {
    render () {
        const { user } = this.props;

        if (user.token === null && this.props.router.location.pathname !== '/login') {
            return <Redirect to="/login"/>;
        }

        return (
            <div>
                <Route path="/logout" component={LogoutContainer}/>
                <Route path="/login" component={LoginContainer}/>
                <div className="app">
                    <NavBarContainer/>
                    <DashboardContainer/>
                </div>
            </div>
        )
    }
}
