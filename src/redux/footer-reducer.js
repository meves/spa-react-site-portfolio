const initialState = {
    author: 'Sergey Medvedkin',
    data: '01-09-2021',
    email: 'meves.sergey@gmail.com',
    tel: '8-918-253-8109'
};

const footerReducer = (state=initialState, action) => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default footerReducer;
