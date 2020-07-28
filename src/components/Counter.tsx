import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from "../bll/store";
import {getCounter, incrementCounterValue} from "../bll/counter-reducer";



const Counter = () => {

    const dispatch = useDispatch();
    const value = useSelector((state:AppStateType) => state.count.value)

    useEffect(() => {
            dispatch(getCounter())
        },[])

    const incrementValue = () => {
        dispatch(incrementCounterValue())
    }

    return (
        <div>
            <h1>Counter</h1>
            <p>value : <strong>{value}</strong></p>
            <button onClick={incrementValue}>Add</button>
        </div>
    )
}

export default Counter;


