import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Forum from './components/Forum/Forum';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { Route } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="App">
      <Header header={props.state.header} />
      <Nav titles={props.state.nav.titles}/>
        <Route path="/main" render={ () => <Main data={props.state.main}/> } />
        <Route path="/blog" render={ () => 
          <Blog data={props.state.blog} dispatch={props.dispatch} /> } 
        />
        <Route path="/forum" render={ () => <Forum data={props.state.forum}/> } />
        <Route path='/shop' render={ () => <Shop data={props.state.shop}/> } />
        <Route path="/contacts" render={ () => <Contacts data={props.state.contacts}/> } />
      <Footer footer={props.state.footer} />
    </div>    
  );
}

export default App;
