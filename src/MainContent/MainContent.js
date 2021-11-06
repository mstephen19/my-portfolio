import React from 'react';
import './main.css';

export default function MainContent(props) {
  return (
    <div className='container'>
      <section className='sec mainBg' id='introduction'>
        {props.splash}
      </section>
      <section className='sec secondBg' id='about'>
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
