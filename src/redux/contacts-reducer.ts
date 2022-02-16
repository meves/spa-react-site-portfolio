import { ActionsTypes } from "./redux-store";

const initialState = { };
type InitialStateType = typeof initialState;

const contactsReducer = (state=initialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default contactsReducer;
