import React from 'react';
import MainContent from './MainContent/MainContent';
import Splash from './MainContent/Sections/Splash';
import AboutMe from './MainContent/Sections/AboutMe';
import Carousel from './MainContent/Sections/Carousel';
import ContactMe from './MainContent/Sections/ContactMe';
import SideNav from './NavBar/SideNav';
import './style.css';

function App() {
  return (
    <>
      <SideNav />
      <MainContent
        splash={<Splash />}
        aboutMe={<AboutMe />}
        carousel={<Carousel />}
        contact={<ContactMe />}
      />
    </>
  );
}

export default App;
