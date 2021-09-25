import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Nav/NavbarContainer';
import MainContainer from './components/Main/MainContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import ForumContainer from './components/Forum/ForumContainer';
import ShopContainer from './components/Shop/ShopContainer';
import ContactsContainer from './components/Contacts/ContactsContainer';
import FooterContainer from './components/Footer/FooterContainer';
import UsersContainer from './components/Users/UsersContainer';
import { Route } from 'react-router-dom';

const App = (props) => {
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
      <FooterContainer/> 
    </div>    
  );
}

export default App;
