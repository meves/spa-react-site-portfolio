import { authMe } from "./auth-reducer";
import { appConst } from "./constants/constants";

const initialState = {
    initialized: false,
    isFetching: true
};

const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case appConst.INIT_SUCCESS:
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
export const setInitSuccess = () => ({
    type: appConst.INIT_SUCCESS
})

// thunk creator 
export const initializeApp = () => dispatch => {
    const promises = [];
    promises.push(dispatch(authMe()));
    // get color scheme
    // get language
    Promise.all(promises).then( () => {
        dispatch(setInitSuccess());
    } );
}


 export default appReducer;
