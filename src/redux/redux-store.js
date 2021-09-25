import { createStore, combineReducers } from 'redux';
import headerReducer from './header-reducer';
import navbarReducer from './navbar-reducer';    
import mainReducer from './main-reducer';
import profileReducer from './profile-reducer';
import forumReducer from './forum-reducer';
import shopReducer from './shop-reducer';
import contactsReducer from './contacts-reducer';
import footerReducer from './footer-reducer';
import usersReducer from './users-reducer';

const reducers = combineReducers({
    headerPage: headerReducer,
    navbarPage: navbarReducer,
    mainPage: mainReducer,
    profilePage: profileReducer,
    forumPage: forumReducer,
    shopPage: shopReducer,
    contactsPage: contactsReducer,
    footerPage: footerReducer,
    usersPage: usersReducer
});
const store = createStore(reducers);

export default store;
