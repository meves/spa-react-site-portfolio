import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { authMe } from "./auth-reducer";
import { INIT_SUCCESS } from "./constants/constants";
import { AppStateType } from "./redux-store";

const initialState = {
    initialized: false,
    isFetching: true
};
type InitialStateType = typeof initialState;

const appReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case INIT_SUCCESS:
            return {
                ...state,
                initialized: true,
                isFetching: false
            }
        default: 
            return state;
    }
};

// action creator
type ActionsTypes = SetInitSuccessActionType;

type SetInitSuccessActionType = {
    type: typeof INIT_SUCCESS
}
export const setInitSuccess = (): SetInitSuccessActionType => ({
    type: INIT_SUCCESS
})

// thunk creator 
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>;

export const initializeApp = (): ThunkType => 
    async (dispatch) => {
        const promises: Array<Promise<void>> = [];
        promises.push(dispatch(authMe()));
        // get color scheme
        // get language
        Promise.all(promises).then( () => {
            dispatch(setInitSuccess());
        } );
    }

 export default appReducer;
