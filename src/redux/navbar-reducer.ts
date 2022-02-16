import { NavbarTitleType } from "../types/types";
import { ActionsTypes } from "./redux-store";

const initialState = {
    titles: [
        {id: 1, title: 'main'},
        {id: 2, title: 'forum'},
        {id: 3, title: 'users'},
        {id: 4, title: 'profile'},
        {id: 5, title: 'shop'},
        {id: 6, title: 'contacts'}
    ] as Array<NavbarTitleType>
};
type InitialStateType = typeof initialState

const navbarReducer = (state=initialState, action: ActionsTypes<any>): InitialStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

export default navbarReducer;
