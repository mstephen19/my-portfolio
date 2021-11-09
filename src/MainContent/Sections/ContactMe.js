import React, { useContext } from 'react';
import Bounce from 'react-reveal/Bounce';
import { LangContext } from '../../App';
import ContactForm from './ContactForm';

export default function ContactMe() {
  const lang = useContext(LangContext);
  const content = {
    title: lang === 'en' ? 'Contact' : 'Контакт',
  };

  return (
    <>
      <div className='title'>
        <h1>{content.title}</h1>
        <div className='line'></div>
      </div>
      <div className='contentWrapper'>
        <Bounce left>
          <div className='contactContainer'>
            <ContactForm />
          </div>
        </Bounce>
      </div>
    </>
  );
}
