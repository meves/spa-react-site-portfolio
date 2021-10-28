import React from 'react';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';
import store from './redux/redux-store';

import './App.scss';
import { initializeApp } from './redux/app-reducer';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Nav/NavbarContainer';
import MainContainer from './components/Main/MainContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ForumContainer from './components/Forum/ForumContainer';
import ShopContainer from './components/Shop/ShopContainer';
import ContactsContainer from './components/Contacts/Contacts';
import FooterContainer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import Preloader from './components/common/Preloader/Preloader';

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
            <Route path="/main" render={() => <MainContainer/>} />
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>} />
            <Route path="/forum" render={() => <ForumContainer/>} />
            <Route path="/users" render={() => <UsersContainer/>} />
            <Route path='/shop' render={() => <ShopContainer/>} />
            <Route path="/contacts" render={() => <ContactsContainer/>} />
            <Route path="/login" render={() => <LoginPage/> } />
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
