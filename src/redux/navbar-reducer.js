const initialState = {
    titles: [
        {id: 1, title: 'main'},
        {id: 2, title: 'forum'},
        {id: 3, title: 'users'},
        {id: 4, title: 'profile'},
        {id: 5, title: 'shop'},
        {id: 6, title: 'contacts'}
    ]
};

const navbarReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;
