import { ActionsTypes } from "./redux-store";

const initialState = {
    logo: 'см',
    heading: 'Web Development on React JS',
    loginText: 'Login'
};
type InitialStateType = typeof initialState;

const headerReducer = (state=initialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default headerReducer; 
