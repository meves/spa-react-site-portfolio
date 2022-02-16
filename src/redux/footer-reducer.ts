import { AuthorInfoType } from "../types/types";
import { ActionsTypes } from "./redux-store";

const initialState = {
    authorInfo: {
        author: 'Sergey Medvedkin',
        date: '01-09-2021',
        email: 'meves.sergey@gmail.com',
        tel: '8-918-253-8109'
    } as AuthorInfoType
};
type InitialStateType = typeof initialState;

const footerReducer = (state=initialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default: 
            return state;
    }
}

export default footerReducer;
