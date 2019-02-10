import { AuthorActions, AuthorActionTypes } from "../actions/author.actions";
import initialState from "./initial-state";

export default function authorReducer(state = initialState.authors, action: AuthorActions) {
    switch (action.type) {
        case AuthorActionTypes.LoadAuthorsSuccess:
            return action.authors;
        default:
            return state;
    }
}
