import { blogReducer } from './blog-reducer';

const store = {
    
    _callSubscriber() {},
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _state: {
        header: {
            logo: 'см',
            heading: 'Web Developer Sergey Medvedkin',
            login: 'Sign in/up'
        },
        nav: {
            titles: [
                {id: 1, title: 'main'},
                {id: 2, title: 'blog'},
                {id: 3, title: 'forum'},
                {id: 4, title: 'shop'},
                {id: 5, title: 'contacts'}
            ]
        },
        main: {
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
        },
        blog: {
            message: 'Blog',
            addPost: {
                title: 'Add new post',
                button: 'Add post',
                placeholderTheme: 'Theme',
                placeholderText: 'add text here...',
                symbolsTheme: '',
                symbolsText: ''
            },
            myPost: {
                title: 'My posts',
                posts: [
                    {id: 1, avatar: '/img/avatar.jpg', theme: 'Mountains', text: 'Text about mountains', date: '01.09.2021'},
                    {id: 2, avatar: '/img/avatar.jpg', theme: 'Rivers', text: 'Text about rivers', date: '02.09.2021'}
                ]
            },            
        },
        forum: {
            message: 'Forum'
        },
        shop: {
            message: 'Shop'
        },
        contacts: {
            message: 'Contacts'
        },
        footer: {
            author: 'Sergey Medvedkin',
            data: '01-09-2021',
            email: 'meves.sergey@gmail.com',
            tel: '8-918-253-8109'
        }
    },
    getState() { return this._state; },

    dispatch(action) {
        this._state.blog = blogReducer(this._state.blog, action);
        this._callSubscriber(this._state);
    }
};

export { store };
