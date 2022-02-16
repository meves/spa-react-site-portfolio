import { ActionsTypes } from "./redux-store";

const initialState = {
    message: 'Shop'
};
type InitialStateType = typeof initialState

const shopReducer = (state=initialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default shopReducer;
