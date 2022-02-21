import { authMe } from "./auth-reducer";
import { CommonThunkType, InferActionsTypes } from "./redux-store";

const initialState = {
    initialized: false,
    isFetching: true
};
type InitialStateType = typeof initialState;

type ActionsTypes = InferActionsTypes<typeof actions>;

const appReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
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

const actions = {
    setInitSuccess: () => ({
        type: 'site-portfolio/medvedkinsergey.ru/app/INIT_SUCCES'
    } as const)
}

// thunk 

type ThunkType = CommonThunkType<ActionsTypes>;

export const initializeApp = (): ThunkType => 
    async (dispatch) => {
        const promises: Array<Promise<void>> = [];
        promises.push(dispatch(authMe()));
        // get color scheme
        // get language
        Promise.all(promises).then( () => {
            dispatch(actions.setInitSuccess());
        } );
    }

 export default appReducer;
