import React, { useContext } from 'react';
import { LangContext } from '../App';
import cv from './Matthias Stephens CV.pdf';

export default function LangToggle({ ...rootDOMAttributes }) {
  const lang = useContext(LangContext);
  return (
    <a href={cv} download>
      <button className='cvBtn' {...rootDOMAttributes}>
        {lang === 'ru' ? 'Резюме' : 'CV'}
      </button>
    </a>
  );
}
