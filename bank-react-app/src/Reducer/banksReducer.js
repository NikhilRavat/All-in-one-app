const initialState = {
    data: [],
    status: '',
    error: ''
}

const banksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BANKS_REQUESTED': return {
            ...state,
            status: 'REQUESTED',
            data: []
        }
        case 'BANKS_RECEIVED': return {
            ...state,
            status: 'RECEIVED',
            data: action.payload
        }
        case 'BANKS_ERROR': return {
            ...state,
            state: 'ERROR',
            error: action.error,
            data: []
        }
        default: return state;
    }
}

export default banksReducer;