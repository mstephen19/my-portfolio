import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { LangContext } from '../App';
import './main.css';

export default function MainContent(props) {
  const lang = useContext(LangContext);
  return (
    <div className='container'>
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
  );
}
