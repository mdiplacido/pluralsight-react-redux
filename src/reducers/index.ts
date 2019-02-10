import { combineReducers } from "redux";
import courseReducer from "./course.reducer";
import authorReducer from "./author.reducer";

const rootReducer = combineReducers({
    authors: authorReducer,
    courses: courseReducer,
});

export default rootReducer;