import React, { createContext, useState } from 'react';
import MainContent from './MainContent/MainContent';
import Splash from './MainContent/Sections/Splash';
import AboutMe from './MainContent/Sections/AboutMe';
import Carousel from './MainContent/Sections/Carousel/TheCarousel';
import ContactMe from './MainContent/Sections/ContactMe';
import SideNav from './NavBar/SideNav';
import LangToggle from './LangBtn/LangToggle';
import './style.css';

export const LangContext = createContext();

function App() {
  const [lang, setLang] = useState('en');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
    lang === 'en'
      ? document.querySelector('html').setAttribute('lang', 'en')
      : document.querySelector('html').setAttribute('lang', 'ru');
  };

  return (
    <LangContext.Provider value={lang}>
      <LangToggle onClick={toggleLang} />
      <SideNav />
      <MainContent
        splash={<Splash />}
        aboutMe={<AboutMe />}
        carousel={<Carousel />}
        contact={<ContactMe />}
      />
    </LangContext.Provider>
  );
}

export default App;
