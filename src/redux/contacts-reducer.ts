const initialState = {};
type InitialStateType = typeof initialState;

const contactsReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

type ActionsTypes = SomeActionType;

type SomeActionType = {
    type: string
}

export default contactsReducer;
