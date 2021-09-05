import './App.scss';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Preview from './components/Preview/Preview';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header logo="см" heading="Персональный сайт Сергея Медведкина"           login="Login" />
      <Menu list={['main', 'about me', 'my skills', 'my works', 'contacts']}/>
      <Preview message="This is a Preview"/>
      <About message="This is an About me"/>
      <Skills message="This is My Skills"/>
      <Works message="This is My Works"/>
      <Contacts message="These are Contacts"/>
      <Footer message="This is a Footer"/>
    </div>    
  );
}

export default App;
