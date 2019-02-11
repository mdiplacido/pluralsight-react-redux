import { Author } from './../models/author';
import { Course } from '../models/course';
import { State } from '../store/state';

const initialState: State = {
    authors: Array<Author>(),
    courses: Array<Course>(),
    numAjaxCallsInProgress: 0
};

export default initialState;