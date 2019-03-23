import {
    getMiddleware,
    initialStateFactory,
    IPurchaseBlendsState,
    postMiddlewareInstall,
} from "@microsoft-commerce/purchase-blends-component-library";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

import rootReducer from "../reducers";
import state from "../reducers/initial-state";
import { State } from "./state";

const epicMiddleware = getMiddleware();
 
export default function configureStore(initialState: State & IPurchaseBlendsState = { ...state, ...initialStateFactory() }) {
    const store = createStore(
        rootReducer, 
        initialState,
        composeWithDevTools(applyMiddleware(thunk, epicMiddleware, immutableStateInvariantMiddleware()))
    );

    postMiddlewareInstall(epicMiddleware);

    return store;
}