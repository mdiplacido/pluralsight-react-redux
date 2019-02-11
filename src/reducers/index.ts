import { combineReducers } from "redux";
import courses from "./course.reducer";
import authors from "./author.reducer";
import numAjaxCallsInProgress from "./ajax-status.reducer";
import { State } from "../store/state";

const rootReducer = combineReducers<State>({
    authors,
    courses,
    numAjaxCallsInProgress
});

export default rootReducer;