import { purchaseBlendsReducers } from "@microsoft-commerce/purchase-blends-component-library";
import { combineReducers } from "redux";

import { State } from "../store/state";
import numAjaxCallsInProgress from "./ajax-status.reducer";
import authors from "./author.reducer";
import courses from "./course.reducer";

const rootReducer = combineReducers<State>({
    authors,
    courses,
    numAjaxCallsInProgress,
    ...purchaseBlendsReducers
});

export default rootReducer;