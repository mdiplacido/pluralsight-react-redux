import { Author } from './../models/author';
import { Course } from '../models/course';
import { State } from '../store/state';
import { initialStateFactory } from "@microsoft-commerce/purchase-blends-component-library";

const initialState: State = {
    authors: Array<Author>(),
    courses: Array<Course>(),
    numAjaxCallsInProgress: 0,
    ...initialStateFactory()
};

export default initialState;