import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Nav/NavbarContainer';
import MainContainer from './components/Main/MainContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ForumContainer from './components/Forum/ForumContainer';
import ShopContainer from './components/Shop/ShopContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import FooterContainer from './components/Footer/FooterContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import { Route } from 'react-router-dom';
import Preloader from './components/common/Preloader/Preloader';
import { initializeApp } from './redux/app-reducer';

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

export default compose(
  connect(mapStateToProps, {initializeApp}),
  withRouter)(App);
