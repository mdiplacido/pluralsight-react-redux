import { CourseActions, CourseActionTypes } from "../actions/course.actions";
import initialState from "./initial-state";

export default function courseReducer(state = initialState.courses, action: CourseActions) {
    switch (action.type) {
        case CourseActionTypes.LoadCoursesSuccess:
            return action.courses;
        default:
            return state;
    }
}
