import { Course } from './../models/course';
import { Author } from '../models/author';

export interface State {
    courses: Course[];
    authors: Author[];
    numAjaxCallsInProgress: number;
}