const initialState = {
    response: '',
    responseStatus: false,
    error: false,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_RESPONSE':
            return{
                ...state,
                response: action.payload,
            };
        case 'ADD_ERROR':
            return{
                ...state,
                error: action.payload,
            }
        case 'ADD_RESPONSE_STATUS':
            return{
                ...state,
                responseStatus: action.payload,
            }
        default: 
            return state;
    }
}

export default rootReducer;