const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

const initialState = {
    counter: {
        value: 0
    }
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER: return {
            ...state,
            counter: {
                value: state.counter.value + 1
            }
        }
        case 'DECREMENT_COUNTER': return {
            ...state,
            counter: {
                value: state.counter.value - 1
            }
        }
        case 'INCREMENT_COUNTER_BY_AMOUNT': return {
            ...state,
            counter: {
                value: state.counter.value + action.payload
            }
        }
        default: return state;
    }
}

export default counterReducer;