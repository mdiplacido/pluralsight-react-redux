import { ActionCreatorsMapObject, AnyAction, Dispatch } from "redux";

import { Course } from "../models/course";

import courseApi from "../api/mockCourseAPI";
import { beginAjaxCall, ajaxCallError } from "./ajax.actions";

export enum CourseActionTypes {
    LoadCoursesSuccess = "LOAD_COURSES_SUCCESS",
    UpdateCourseSuccess = "UPDATE_COURSE_SUCCESS",
    CreateCourseSuccess = "CREATE_COURSE_SUCCESS",
}

export interface LoadCoursesSuccessAction extends AnyAction {
    type: CourseActionTypes.LoadCoursesSuccess,
    courses: Course[]
}

export interface CreateCourseSuccessAction extends AnyAction {
    type: CourseActionTypes.CreateCourseSuccess,
    course: Course
}

export interface UpdateCourseSuccessAction extends AnyAction {
    type: CourseActionTypes.UpdateCourseSuccess,
    course: Course
}

export function loadCoursesSuccess(courses: Course[]): LoadCoursesSuccessAction {
    return {
        type: CourseActionTypes.LoadCoursesSuccess,
        courses
    };
}

export function createCourseSuccess(course: Course): CreateCourseSuccessAction {
    return {
        type: CourseActionTypes.CreateCourseSuccess,
        course
    };
}

export function updateCourseSuccess(course: Course): UpdateCourseSuccessAction {
    return {
        type: CourseActionTypes.UpdateCourseSuccess,
        course
    };
}

export function loadCourses() {
    return (dispatch: Dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.getAllCourses()
            .then(courses => dispatch(loadCoursesSuccess(courses)))
            .catch(e => { dispatch(ajaxCallError()); throw(e); });
    };
}

export function saveCourse(course: Course) {
    return (dispatch: Dispatch) => {
        dispatch(beginAjaxCall());
        return courseApi.saveCourse(course)
            .then(c => course.id ?
                dispatch(updateCourseSuccess(c)) :
                dispatch(createCourseSuccess(c)))
            .catch(e => { dispatch(ajaxCallError()); throw(e); });
    };  
}

export interface CourseActionCreator extends ActionCreatorsMapObject<CourseActions | Promise<CourseActions>> {
    loadCoursesSuccess: (courses: Course[]) => LoadCoursesSuccessAction;
    saveCourse: (course: Course) => Promise<CreateCourseSuccessAction | UpdateCourseSuccessAction>;
}

export const CourseActionCreatorFactory: () => CourseActionCreator = () => ({
    loadCoursesSuccess: loadCoursesSuccess,
    saveCourse: saveCourse as any
});

export type CourseActions = LoadCoursesSuccessAction | CreateCourseSuccessAction | UpdateCourseSuccessAction;