const initialState = {
    result: 15500,
    value: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                result: state.result += action.payload,
                value: [
                    ...state.value,
                    action.payload
                ]
            }
            return state;
        case "SUBTRACT":
            state = {
                result: state.result -= action.payload,
                value: [
                    ...state.value,
                    action.payload
                ]
            }
            return state;
        default:
            return state;
    }
};

export default reducer;