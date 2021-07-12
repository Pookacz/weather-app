export const addResponse = (index) => ({
    type: 'ADD_RESPONSE',
    payload: index,
});

export const addError = (index) => ({
    type: 'ADD_ERROR',
    payload: index,
})