import { CourseActions, CourseActionTypes } from "../actions/course.actions";
import initialState from "./initial-state";

export default function courseReducer(state = initialState.courses, action: CourseActions) {
    switch (action.type) {
        case CourseActionTypes.LoadCoursesSuccess:
            return action.courses;
        case CourseActionTypes.CreateCourseSuccess:
            return [
                ...state,
                { ...action.course }
            ];
        case CourseActionTypes.UpdateCourseSuccess: 
            return [
                ...state.filter(c => c.id !== action.course.id),
                { ...action.course }
            ];
        default:
            return state;
    }
}
