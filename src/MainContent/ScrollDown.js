import React, { useContext } from 'react';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HideContext } from './MainContent';

export default function ScrollDown({ ...rootDOMAttributes }) {
  const hide = useContext(HideContext);

  const handleClick = (e) => {
    document.querySelector('.container').scrollBy(0, 600);
  };

  const secondClick = (e) => {
    document.querySelector('.container').scrollTo(0, 0);
  };

  return (
    <>
      <button
        style={{ display: hide ? 'none' : 'block' }}
        className='downScroll'
        {...rootDOMAttributes}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
      <button
        style={{ display: hide ? 'block' : 'None' }}
        className='downScroll'
        onClick={secondClick}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
}
