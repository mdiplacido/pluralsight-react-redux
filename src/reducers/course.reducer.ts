import { Course } from './../models/course';
import { CourseActionTypes, CourseActions } from '../actions/course.actions';

export default function courseReducer(state: Course[] = [], action: CourseActions) {
    switch (action.type) {
        case CourseActionTypes.CreateCourse:
            return [...state,  { ...action.course }];
            break;
        default:
            return state;
    }
}
