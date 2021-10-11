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
<<<<<<< HEAD
import appReducer from './app-reducer';
=======
>>>>>>> ea1314901a69ba3dccd0bb20300f86d8ef72a6b4

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
<<<<<<< HEAD
    form: formReducer,
    app: appReducer
=======
    form: formReducer
>>>>>>> ea1314901a69ba3dccd0bb20300f86d8ef72a6b4
});
const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;
export default store;
