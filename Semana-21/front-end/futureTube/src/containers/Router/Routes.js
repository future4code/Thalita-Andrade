import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import ChangePassword from '../ChangePassword/ChangePassword';
import AddVideo from '../AddVideo/AddVideo';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/change/password" component={ChangePassword} />
            <Route path="/add/video" component={AddVideo} />
        </Switch>
    );
}