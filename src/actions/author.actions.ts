import { AnyAction, ActionCreatorsMapObject, Dispatch } from "redux";
import { Author } from "../models/author";
import authorApi from "../api/mockAuthorAPI";

export enum AuthorActionTypes {
    LoadAuthorsSuccess = "LOAD_AUTHORS_SUCCESS",
}

export interface LoadAuthorsSuccessAction extends AnyAction {
    type: AuthorActionTypes.LoadAuthorsSuccess,
    authors: Author[]
}

export function loadAuthorsSuccess(authors: Author[]): LoadAuthorsSuccessAction {
    return {
        type: AuthorActionTypes.LoadAuthorsSuccess,
        authors
    };
}

export function loadAuthors() {
    return (dispatch: Dispatch) => {
        return authorApi.getAllAuthors()
                .then(authors => dispatch(loadAuthorsSuccess(authors)))
                .catch(err => { throw(err) });
    };
}


export interface AuthorActionCreator extends ActionCreatorsMapObject<AuthorActions> {
    loadAuthorsSuccess: (authors: Author[]) => LoadAuthorsSuccessAction;
}

export const AuthorActionCreatorFactory: () => AuthorActionCreator = () => ({
    loadAuthorsSuccess: loadAuthorsSuccess
});

export type AuthorActions = LoadAuthorsSuccessAction;
