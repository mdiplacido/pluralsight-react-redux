import Home from './components/home/home';
import React from 'react';
import { About } from './components/about/about';
import { Route, Switch } from 'react-router';

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
            <Route component={Home} />
        </Switch>
    );
};