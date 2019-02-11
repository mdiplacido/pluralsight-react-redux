import { ActionCreatorsMapObject, AnyAction, Dispatch } from "redux";

import authorApi from "../api/mockAuthorAPI";
import { Author } from "../models/author";
import { ajaxCallError, beginAjaxCall } from "./ajax.actions";

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
        dispatch(beginAjaxCall());
        return authorApi.getAllAuthors()
            .then(authors => dispatch(loadAuthorsSuccess(authors)))
            .catch(e => { dispatch(ajaxCallError()); throw(e); });
    };
}

export interface AuthorActionCreator extends ActionCreatorsMapObject<AuthorActions> {
    loadAuthorsSuccess: (authors: Author[]) => LoadAuthorsSuccessAction;
}

export const AuthorActionCreatorFactory: () => AuthorActionCreator = () => ({
    loadAuthorsSuccess: loadAuthorsSuccess
});

export type AuthorActions = LoadAuthorsSuccessAction;
