import { authMe } from "./auth-reducer";
import { INIT_SUCCESS } from "./constants/constants";

const initialState = {
    initialized: false,
    isFetching: true
};
type InitialStateType = typeof initialState;

const appReducer = (state=initialState, action: AppReducerActionType): InitialStateType => {
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
type AppReducerActionType = SetInitSuccessActionType;

type SetInitSuccessActionType = {
    type: typeof INIT_SUCCESS
}
export const setInitSuccess = (): SetInitSuccessActionType => ({
    type: INIT_SUCCESS
})

// thunk creator 
export const initializeApp = () => (dispatch: any) => {
    const promises = [];
    promises.push(dispatch(authMe()));
    // get color scheme
    // get language
    Promise.all(promises).then( () => {
        dispatch(setInitSuccess());
    } );
}

 export default appReducer;
