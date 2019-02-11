import { AjaxActions, AjaxActionTypes } from "../actions/ajax.actions";
import initialState from "./initial-state";
import { AnyAction } from "redux";

function actionTypeEndsInSuccess(type: string) {
    return type.substring(type.length - 8) == "_SUCCESS";
}

export default function ajaxStatusReducer(state = initialState.numAjaxCallsInProgress, action: AjaxActions | AnyAction) {
    if (action.type === AjaxActionTypes.BeginAjaxCall) {
        return state + 1;
    } else if (actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }

    return state;
}