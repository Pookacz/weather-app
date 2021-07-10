const initialState = {
    response: '',
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_RESPONSE':
            return{
                ...state,
                response: action.payload
            };
        default: 
            return state;
    }
}

export default rootReducer;