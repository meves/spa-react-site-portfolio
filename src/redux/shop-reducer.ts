const initialState = {
    message: 'Shop'
};
type InitialStateType = typeof initialState

const shopReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

// action creators
type ActionsTypes = SomeActionType;

type SomeActionType = {
    type: string
}

export default shopReducer;
