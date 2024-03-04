const initialState = {
    token: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOKEN': return {
            ...state,
            token: action.payload
        }
        default: return state;
    }
}

export default userReducer;