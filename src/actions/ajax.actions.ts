import { BeginAjaxCallAction } from './ajax.actions';
import { AnyAction } from "redux";

export enum AjaxActionTypes {
    BeginAjaxCall = "BEGIN_AJAX_CALL",
}

export interface BeginAjaxCallAction extends AnyAction {
    type: AjaxActionTypes.BeginAjaxCall,
}

export function beginAjaxCall(): BeginAjaxCallAction {
    return { type: AjaxActionTypes.BeginAjaxCall };
}

export type AjaxActions = BeginAjaxCallAction;