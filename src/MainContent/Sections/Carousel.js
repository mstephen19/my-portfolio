import React, { useContext } from 'react';
import Bounce from 'react-reveal/Bounce';
import { LangContext } from '../../App';

export default function Carousel() {
  const lang = useContext(LangContext);
  const content = {
    title: lang === 'en' ? 'Projects' : 'Мои Проекты',
  };

  return (
    <>
      <div className='title'>
        <h1>{content.title}</h1>
        <div className='line'></div>
      </div>
      <div className='contentWrapper'>
        <Bounce left>
          <h1>Show off projects</h1>
        </Bounce>
      </div>
    </>
  );
}
