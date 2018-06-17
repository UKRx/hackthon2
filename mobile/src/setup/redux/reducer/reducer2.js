const reducer = (state = {name: 'man',age: 22}, action) => {
    switch (action.type) {
        case "setName":
            state = {
                name: action.payload
            }
            return state;
        case "setAge":
            state = {
                age: action.payload
            }
            return state;
        default:
            return state;
    }
};

export default reducer;