import CoursesContainer from './components/course/courses.container';
import HomeContainer from './components/home/home.container';
import React from 'react';
import { AboutContainer } from './components/about/about.container';
import { Route, Switch } from 'react-router';

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/courses" component={CoursesContainer} />
            <Route component={HomeContainer} />
        </Switch>
    );
};