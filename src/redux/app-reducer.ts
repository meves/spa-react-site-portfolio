import { ThunkAction } from "redux-thunk";
import { authMe } from "./auth-reducer";
import { AppStateType, ActionsTypes } from "./redux-store";

const initialState = {
    initialized: false,
    isFetching: true
};
type InitialStateType = typeof initialState;

const appReducer = (state=initialState, action: ActionsTypes<ActionType>): InitialStateType => {
    switch (action.type) {
        case "site-portfolio/medvedkinsergey.ru/app/INIT_SUCCES":
            return {
                ...state,
                initialized: true,
                isFetching: false
            }
        default: 
        return state;
    }
};

const action = {
    setInitSuccess: () => ({
        type: 'site-portfolio/medvedkinsergey.ru/app/INIT_SUCCES'
    } as const)
}
type ActionType = typeof action;

// thunk 
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes<ActionType>>;

export const initializeApp = (): ThunkType => 
    async (dispatch) => {
        const promises: Array<Promise<void>> = [];
        promises.push(dispatch(authMe()));
        // get color scheme
        // get language
        Promise.all(promises).then( () => {
            dispatch(action.setInitSuccess());
        } );
    }

 export default appReducer;
