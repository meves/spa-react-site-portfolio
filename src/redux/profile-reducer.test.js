import profileReducer, { addNewPost, deletePost } from "./profile-reducer";

const state = {
    myPost: {
        posts: [
            {id: 1, avatar: '/img/avatar.jpg', theme: 'Mountains', text: 'Text about mountains', date: '01.09.2021'},
            {id: 2, avatar: '/img/avatar.jpg', theme: 'Rivers', text: 'Text about rivers', date: '02.09.2021'}
        ]
    }
};
it('new post should be added', () => {
    const action = addNewPost('theme', 'text');
    const newState = profileReducer(state, action);
    expect(newState.myPost.posts.length).toBe(3);
});
it('new post should be correct', () => {
    const action = addNewPost('theme', 'text');
    const newPost = {id: 3, avatar: '/img/avatar.jpg', theme: 'theme', text: 'text', date: new Date().toLocaleDateString()};
    const newState = profileReducer(state, action);
    expect(newState.myPost.posts[2]).toEqual(newPost);
});
it('post should be deleted', () => {
    const action = deletePost(2);
    const newState = profileReducer(state, action);
    expect(newState.myPost.posts.length).toBe(1);
});
it('post should not be deleted with wrong id', () => {
    const action = deletePost(3);
    const newState = profileReducer(state, action);
    expect(newState.myPost.posts.length).toBe(2);    
});
