import React from 'react';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';
import { initializeApp } from './redux/app-reducer';
import { withSuspense } from './hoc/withSuspense';

import './App.scss';
import Preloader from './components/common/Preloader/Preloader';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Nav/NavbarContainer';
import FooterContainer from './components/Footer/Footer';
const MainContainer = React.lazy(() => import('./components/Main/MainContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const ForumContainer = React.lazy(() => import('./components/Forum/ForumContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainerClass'));
const ShopContainer = React.lazy(() => import('./components/Shop/ShopContainer'));
const ContactsContainer = React.lazy(() => import('./components/Contacts/Contacts'));
const LoginPage = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader isFetching={this.props.isFetching}/>
    }
    return (
      <div className="App">        
          <HeaderContainer/>
          <NavbarContainer/>
            <Route path="/main" render={() => withSuspense(MainContainer)} />
            <Route path="/profile/:userId?" render={() => withSuspense(ProfileContainer)} />
            <Route path="/forum" render={() => withSuspense(ForumContainer)} />
            <Route path="/users" render={() => withSuspense(UsersContainer)} />
            <Route path='/shop' render={() => withSuspense(ShopContainer)} />
            <Route path="/contacts" render={() => withSuspense(ContactsContainer)} />
            <Route path="/login" render={() => withSuspense(LoginPage)} />
          <FooterContainer/>        
      </div>    
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
  isFetching: state.app.isFetching 
})

const AppContainer = compose(withRouter, connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>        
    </BrowserRouter>
  )
}

export default MainApp;
