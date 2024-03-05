const initialState = {
    user: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN': return {
            ...state,
            user: action.payload
        }
        case 'LOGOUT': return {
            ...state,
            user: {}
        }
        default: return state;
    }
}

export default userReducer;