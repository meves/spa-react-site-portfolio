import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import headerReducer from './header-reducer';
import navbarReducer from './navbar-reducer';    
import mainReducer from './main-reducer';
import profileReducer from './profile-reducer';
import forumReducer from './forum-reducer';
import shopReducer from './shop-reducer';
import contactsReducer from './contacts-reducer';
import footerReducer from './footer-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import { reducer as formReducer } from 'redux-form';
import appReducer from './app-reducer';

const reducers = combineReducers({
    headerPage: headerReducer,
    navbarPage: navbarReducer,
    mainPage: mainReducer,
    profilePage: profileReducer,
    forumPage: forumReducer,
    shopPage: shopReducer,
    contactsPage: contactsReducer,
    footerPage: footerReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer

});
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
