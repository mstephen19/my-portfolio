import React from 'react';
import {
  useContext,
  createContext,
  useState,
} from 'react/cjs/react.development';
import { LangContext } from '../App';
import './main.css';
import ScrollDown from './ScrollDown';

export const HideContext = createContext();

export default function MainContent(props) {
  const [toHideBtn, setHide] = useState(false);

  const handleScroll = () => {
    setHide(() => {
      const mainContainer = document.querySelector('.container');
      const difference = mainContainer.scrollHeight - mainContainer.scrollTop;
      if (difference <= 800) return true;
      return false;
    });
  };

  // console.log(document.querySelector('.container').scrollTop);

  const lang = useContext(LangContext);
  return (
    <HideContext.Provider value={toHideBtn}>
      <ScrollDown />
      <div className='container' onScroll={handleScroll}>
        <section className='sec mainBg' id='introduction'>
          {props.splash}
        </section>
        <section className='sec secondBg' id='about' lang={lang}>
          {props.aboutMe}
        </section>
        <section className='sec mainBg' id='projects'>
          {props.carousel}
        </section>
        <section className='sec secondBg' id='contact'>
          {props.contact}
        </section>
      </div>
    </HideContext.Provider>
  );
}
