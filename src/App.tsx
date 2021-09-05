import './App.scss';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Blog from './components/Blog/Blog';
import Forum from './components/Forum/Forum';
import Shop from './components/Shop/Shop';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import { stateType, state } from './redux/state';

const App = (props: typeof state) => {
  return (
    <div className="App">
      <Header logo="см" heading="Персональный сайт Сергея Медведкина" login="Login" />
      <Nav list={props.nav.menu}/>
        <Main message="This is a Main"/>
        <Blog message="This is a Blog"/>
        <Forum message="This is a Forum"/>
        <Shop message="This is a Shop"/>
        <Contacts message="These are Contacts"/>
      <Footer message="This is a Footer"/>
    </div>    
  );
}

export default App;
