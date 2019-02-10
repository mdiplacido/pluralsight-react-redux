import React from "react";
import { Route, Switch } from "react-router";

import { AboutContainer } from "./components/about/about.container";
import CoursesContainer from "./components/course/courses.container";
import ManageCoursePage from "./components/course/manage-course-page";
import HomeContainer from "./components/home/home.container";

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/course" component={ManageCoursePage} />
            <Route path="/course/:id" component={ManageCoursePage} />
            <Route path="/courses" component={CoursesContainer} />
            <Route component={HomeContainer} />
        </Switch>
    );
};