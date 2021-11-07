import React, { useContext } from 'react';
import { LangContext } from '../../App';
import Bounce from 'react-reveal/Bounce';

export default function Splash() {
  const lang = useContext(LangContext);
  const content = {
    description:
      lang === 'en' ? 'Full-Stack Developer' : 'Full-Stack Веб-Разработчик',
    class: lang === 'en' ? 'desEN' : 'desRU',
  };

  return (
    <Bounce left>
      <div style={{ display: 'flex' }}>
        <h1 className='M name'>M</h1>
        <h1 className='A name'>A</h1>
        <h1 className='T name'>T</h1>
        <h1 className='T2 name'>T</h1>
      </div>
      <h1 className='name'>STEPHENS</h1>
      <p className={content.class}>{content.description}</p>
    </Bounce>
  );
}
