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
    componentDidMount() {
        if (this.props.user !== null) {
            this.props.hydrate(this.props.user.token);
        }
    }

    render() {
        const { user } = this.props;

        if (user === null && this.props.router.location.pathname !== '/login') {
            return <Redirect to="/login"/>;
        }

        return (
            <main className="main">
                <Route path="/login" component={LoginContainer}/>
                <Route path="/logout" component={LogoutContainer}/>
                <div className="app">
                    <NavBarContainer/>
                    <Route path="/entry/:date" onChange={this.props.resetReadonly} component={DashboardContainer}/>
                    <Route path="/" exact={true} component={DashboardContainer}/>
                </div>
            </main>
        );
    }
}
