import { Course } from "../models/course";
import { Action } from "redux";

export enum CourseActionTypes {
    CreateCourse = "CREATE_COURSE",
}

export interface CreateCourseAction extends Action<string> {
    type: CourseActionTypes.CreateCourse,
    course: Course
}

export function createCourse(course: Course): CreateCourseAction {
 return {
    type: CourseActionTypes.CreateCourse, 
    course
 };
}

export type CourseActions = CreateCourseAction;