const initialState = {
    message: 'Shop'
};
type InitialStateType = typeof initialState

const shopReducer = (state=initialState, action: ShopreducerActionType): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

// action creators
type ShopreducerActionType = any

export default shopReducer;
