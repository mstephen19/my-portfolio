import React, { useContext } from 'react';
import { LangContext } from '../App';

export default function LangToggle({ ...rootDOMAttributes }) {
  const lang = useContext(LangContext);
  return (
    <div>
      <button className='langToggle' {...rootDOMAttributes}>
        {lang === 'ru' ? 'En' : 'Ру'}
      </button>
    </div>
  );
}
