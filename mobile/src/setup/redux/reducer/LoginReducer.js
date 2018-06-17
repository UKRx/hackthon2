const initialState = {
    status: "FIRSTTIME",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "APPSTART":
            state = {
                status: "FIRSTTIME",
            }
            return state;
        case "NOTSIGNIN":
            state = {
                status: "NOTSIGNIN",
            }
            return state;
        case "SIGNINED":
            state = {
                status: "SIGNINED",
            }
            return state;
        default:
            return state;
    }
};

export default reducer;