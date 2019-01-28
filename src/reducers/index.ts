import { combineReducers } from "redux";
import courseReducer from "./course.reducer";

const rootReducer = combineReducers({
    courses: courseReducer
});

export default rootReducer;