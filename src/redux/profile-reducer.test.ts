import profileReducer, { actions, initialState } from "./profile-reducer";

const { addNewPost, deletePost } = actions;
const state = initialState;

it('new post should be added', () => {
    const action = addNewPost('theme', 'text');
    const newState = profileReducer(state, action);
    expect(newState.myPost.posts.length).toBe(3);
});
it('new post should be correct', () => {
    const action = addNewPost('theme', 'text');
    const newPost = {id: 3, avatarUrl: '/img/avatar.jpg', theme: 'theme', text: 'text', date: new Date().toLocaleDateString()};
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
