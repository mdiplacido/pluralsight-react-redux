import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { loadCourses } from "./actions/course.actions";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configure-store";
import { loadAuthors } from "./actions/author.actions";

const store = configureStore();

const loadCoursesAction = loadCourses();
const loadAuthorsAction = loadAuthors();

// TODO: what is the proper cast for this?
store.dispatch(loadCoursesAction as any);
store.dispatch(loadAuthorsAction as any);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
