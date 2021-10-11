const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'; 

const initialState = {
    messages: [
        {id: 1, avatarUrl: '/img/avatar.jpg', name: 'Sergey', theme: 'auto', message: 'Hello, friends. I have bought Lamborgini'},
        {id: 2, avatarUrl: '/img/avatar.jpg', name: 'Irina', theme: 'tattoo', message: 'I want new tattoo'},
        {id: 3, avatarUrl: '/img/avatar.jpg', name: 'Andrew', theme: 'auto', message: 'It is athe best car'},
        {id: 4, avatarUrl: '/img/avatar.jpg', name: 'Oleg', theme: 'auto', message: 'Ferrary is Dynamic!'},
        {id: 5, avatarUrl: '/img/avatar.jpg', name: 'Olga', theme: 'tattoo', message: 'My expirience is good'}
    ]
};

const forumReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length, avatarUrl: '/img/avatar.jpg', ...action.message}]
            }
        default:
            return state;
    }
}

// action creators
export const addNewMessage = (message) => {
    return {
        type: ADD_NEW_MESSAGE,
        message
    }
}

export default forumReducer;
