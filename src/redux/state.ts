const  state = {
    header: {},
    nav: {
        menu: [
            {id: 1, title: 'main'},
            {id: 2, title: 'blog'},
            {id: 3, title: 'forum'},
            {id: 4, title: 'my works'},
            {id: 5, title: 'contacts'}
        ]
    },
    footer: {}
};

export type stateType = typeof state;

export { state };