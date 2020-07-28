import { Dispatch } from "redux"
import {counterApi} from "../api/counter-api";
import {AppStateType, InferActionTypes} from "./store";

const initialState = {
    value: 99
}

type InitialStateType = typeof initialState


export const counterReducer = (state: InitialStateType = initialState, action: ActionsType) : InitialStateType => {
    switch (action.type) {
        case 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS':
            return {
                ...state,
                value: action.value
            }
        case 'COUNTER_COUNTER_REDUCER/INC_COUNTER_SUCCESS':
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
}

//Action creators
type ActionsType = InferActionTypes<typeof actions>

const actions = {
    getCounterValueSuccess:(value: number) => ({type : 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS', value}),
    incCounterSuccess:(value: number) => ({
        type:'COUNTER_COUNTER_REDUCER/INC_COUNTER_SUCCESS', value
    })
}


//Thunk creators

export const  getCounter = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        let data = await counterApi.getCounterValue()
        dispatch(actions.getCounterValueSuccess(data.value))
    } catch (e) {
        console.log(e)
    }
}

export const incrementCounterValue = () => async (dispatch: Dispatch<ActionsType>, getState: () => AppStateType) => {
    try {
        let currentValue = getState().count.value
        let newCurrentValue = currentValue + 1
        let res = await counterApi.incrementCounter(newCurrentValue)
        dispatch(actions.incCounterSuccess(res.data.value))
    } catch (e) {
        console.log(e)
    }
}
