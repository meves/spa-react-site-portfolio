const initialState = {
    titles: [
        {id: 1, title: 'main'},
        {id: 2, title: 'blog'},
        {id: 3, title: 'forum'},
        {id: 4, title: 'shop'},
        {id: 5, title: 'contacts'},
        {id: 6, title: 'users'}
    ]
};

const navbarReducer = (state=initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;
