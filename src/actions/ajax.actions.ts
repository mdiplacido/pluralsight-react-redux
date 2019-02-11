import { AnyAction } from "redux";

export enum AjaxActionTypes {
    BeginAjaxCall = "BEGIN_AJAX_CALL",
    AjaxCallError = "AJAX_CALL_ERROR"
}

export interface BeginAjaxCallAction extends AnyAction {
    type: AjaxActionTypes.BeginAjaxCall,
}

export interface AjaxCallErrorAction extends AnyAction {
    type: AjaxActionTypes.AjaxCallError,
}

export function beginAjaxCall(): BeginAjaxCallAction {
    return { type: AjaxActionTypes.BeginAjaxCall };
}

export function ajaxCallError(): AjaxCallErrorAction {
    return { type: AjaxActionTypes.AjaxCallError };
}

export type AjaxActions = BeginAjaxCallAction | AjaxCallErrorAction;