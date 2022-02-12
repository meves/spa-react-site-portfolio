const initialState = {
    logo: 'см',
    heading: 'Web Development on React JS',
    loginText: 'Login'
};
type InitialStateType = typeof initialState;

const headerReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default: 
            return state;
    }
}

type ActionsTypes = SomeActionType;

type SomeActionType = {
    type: string
}

export default headerReducer; 
