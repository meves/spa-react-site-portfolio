import React from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { Route, BrowserRouter, withRouter, Switch } from 'react-router-dom';
import store, { AppStateType } from './redux/redux-store';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';

import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Nav/NavbarContainer';
import FooterContainer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ForumContainer = React.lazy(() => import('./components/Forum/ForumContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainerClass'));
const ShopContainer = React.lazy(() => import('./components/Shop/ShopContainer'));
const ContactsContainer = React.lazy(() => import('./components/Contacts/Contacts'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

type PropsType = {
  initializeApp: () => void
  initialized: boolean
  isFetching: boolean
}

class App extends React.Component<PropsType> {
  catchAllUnhandledErrors = (event: PromiseRejectionEvent) => {
    // set globalError in app-reducer through thunk-creator and action-creator 
    // then show the error in ErrorComponent
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader isFetching={this.props.isFetching}/>
    }
    return (
      <div className="App">        
          <HeaderContainer/>
          <NavbarContainer/>
          <Switch>
            <Route exact path="/" render={() => withSuspense(MainContainer)}/>
            <Route path="/main" render={() => withSuspense(MainContainer)} />
            <Route path="/profile/:userId?" render={() => withSuspense(ProfileContainer)} />
            <Route path="/forum" render={() => withSuspense(ForumContainer)} />
            <Route path="/users" render={() => withSuspense(UsersContainer)} />
            <Route path='/shop' render={() => withSuspense(ShopContainer)} />
            <Route path="/contacts" render={() => withSuspense(ContactsContainer)} />            
            <Route path="/login" render={() => withSuspense(LoginPage)} />  
            <Route path="*" render={() => withSuspense(NotFound)} />   
          </Switch>              
          <FooterContainer/>        
      </div>    
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isFetching: state.app.isFetching 
})
type MapDispatchPropsType = {
  initializeApp: () => void
}
type MapStatePropsType = ReturnType<typeof mapStateToProps>;

const AppContainer = compose<React.ComponentType>(
        withRouter, 
        connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, { initializeApp }))(App);

const MainApp: React.FC = (props): JSX.Element => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>        
    </BrowserRouter>
  )
}

export default MainApp;
