import React from "react";
import { Route, Switch } from "react-router";
import { CheckoutContainer, AppContainer, IUserInfo } from "@microsoft-commerce/purchase-blends-component-library";

import { AboutContainer } from "./components/about/about.container";
import CoursesContainer from "./components/course/courses.container";
import ManageCoursePage from "./components/course/manage-course-page";
import HomeContainer from "./components/home/home.container";
import Cart from "./components/cart/cart";

import { IntlProvider } from "react-intl";

const fakeUser: IUserInfo = {
    isAdmin: true,
    language: "en-us",
    market: "US",
    token: "some-fake-token"
};

export const AppRoutes = () => {
    return (
        <Switch>
            <Route path="/about" component={AboutContainer} />
            <Route path="/home" component={HomeContainer} />
            <Route path="/course/:id" component={ManageCoursePage} />
            <Route path="/course" component={ManageCoursePage} />
            <Route path="/courses" component={CoursesContainer} />
            <AppContainer user={fakeUser}>
                <IntlProvider locale="en-us" messages={undefined}>
                    <React.Fragment>
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={CheckoutContainer} />
                    </React.Fragment>
                </IntlProvider>
            </AppContainer>
            <Route component={HomeContainer} />
        </Switch>
    );
};