import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    count: counterReducer
})

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export let store = createStore(rootReducer, applyMiddleware(thunk));

