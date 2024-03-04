import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const count = useSelector((state) => state.counterReducer.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch({
                type: 'INCREMENT_COUNTER'
            })}>Increment</button>
            <button onClick={() => dispatch({
                type: 'DECREMENT_COUNTER'
            })}>Decrement</button>
            <button onClick={() => dispatch({
                type: 'INCREMENT_COUNTER_BY_AMOUNT',
                payload: 5
            })}>Increment by 5</button>
            <span>Counter value is = {count}</span>
            <span>Counter component</span>
        </div>
    )
}

export default Counter
