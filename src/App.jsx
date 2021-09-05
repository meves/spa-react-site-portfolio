import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Forum from './components/Forum/Forum';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = (props) => {
  return (
    <div className="App">
      <Header logo="см" heading="Персональный сайт Сергея Медведкина" login="Login" />
      <Nav list={['main', 'blog', 'forum', 'shop', 'contacts']}/>
      <Main message="This is a Preview"/>
      <Blog message="This is an About me"/>
      <Forum message="This is My Skills"/>
      <Shop message="This is My Works"/>
      <Contacts message="These are Contacts"/>
      <Footer message="This is a Footer"/>
    </div>    
  );
}

export default App;
