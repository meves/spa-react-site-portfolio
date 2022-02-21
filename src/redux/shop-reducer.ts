const initialState = {
    message: 'Shop'
};
type InitialStateType = typeof initialState

const shopReducer = (state=initialState, action: any): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;
