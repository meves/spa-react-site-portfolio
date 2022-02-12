import { AuthorInfoType } from "../types/types";

const initialState = {
    authorInfo: {
        author: 'Sergey Medvedkin',
        date: '01-09-2021',
        email: 'meves.sergey@gmail.com',
        tel: '8-918-253-8109'
    } as AuthorInfoType
};
type InitialStateType = typeof initialState;

const footerReducer = (state=initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        default: 
            return state;
    }
}

type ActionsTypes = SomeActionType;

type SomeActionType = {
    type: string
}

export default footerReducer;
