const initialState = {
    logo: 'см',
    heading: 'Web Development on React JS',
    loginText: 'Login'
};
type InitialStateType = typeof initialState;

const headerReducer = (state=initialState, action: any): InitialStateType => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default headerReducer; 
