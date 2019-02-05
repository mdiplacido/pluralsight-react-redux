import { ActionCreatorsMapObject, AnyAction, Dispatch } from "redux";

import { Course } from "../models/course";

import courseApi from "../api/mockCourseAPI";

export enum CourseActionTypes {
    LoadCoursesSuccess = "LOAD_COURSES_SUCCESS",
}

export interface LoadCoursesSuccessAction extends AnyAction {
    type: CourseActionTypes.LoadCoursesSuccess,
    courses: Course[]
}

export function loadCoursesSuccess(courses: Course[]): LoadCoursesSuccessAction {
 return {
    type: CourseActionTypes.LoadCoursesSuccess, 
    courses: courses
 };
}

export function loadCourses() {
    return (dispatch: Dispatch) => {
        return courseApi.getAllCourses()
                .then(courses => dispatch(loadCoursesSuccess(courses)))
                .catch(err => { throw(err) });
    };
}

export interface CourseActionCreator extends ActionCreatorsMapObject<CourseActions> {
    loadCoursesSuccess: (courses: Course[]) => LoadCoursesSuccessAction;
}

export const CourseActionCreatorFactory: () => CourseActionCreator = () => ({
    loadCoursesSuccess: loadCoursesSuccess
});

export type CourseActions = LoadCoursesSuccessAction;