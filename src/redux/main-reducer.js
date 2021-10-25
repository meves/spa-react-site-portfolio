// initialState
const intialState = {
    message: 'Main',
    about: {
        heading: 'About me',
        image: '/img/avatar.jpg',
        text: 'About me text'
    },
    skills: {
        heading: 'My skills',
        items: [
            {id: 1, item: 'HTML/CSS'},
            {id: 2, item: 'JavaScript'},
            {id: 3, item: 'TypeScript'},
            {id: 4, item: 'React/Redux'},
            {id: 5, item: 'Node.js'}
        ]
    },
    works: {
        heading: 'My works',
        preview: 'Preview',
        desc: 'Description',
        ref: 'More...'
    }
};

// reducer
const mainReducer = (state=intialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

// actionCreators



export default mainReducer;
