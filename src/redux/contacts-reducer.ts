const initialState = {};
type InitialStateType = typeof initialState;

const contactsReducer = (state=initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default contactsReducer;
