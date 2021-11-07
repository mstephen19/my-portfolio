import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHome,
  faInfo,
  faProjectDiagram,
  faEnvelopeSquare,
} from '@fortawesome/free-solid-svg-icons';
import './nav.css';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

export default function Links() {
  return (
    <div className='flexed' style={{ height: '85%' }}>
      <div className='flexed' style={{ height: '70%' }}>
        <a href='#introduction'>
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a href='#about'>
          <FontAwesomeIcon icon={faInfo} />
        </a>
        <a href='#projects'>
          <FontAwesomeIcon icon={faProjectDiagram} />
        </a>
        <a href='#contact'>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
      <div className='flexed' style={{ height: '30%' }}>
        <a
          href='https://github.com/mstephen19/'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href='https://www.linkedin.com/in/mstephen19/'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href='https://stackoverflow.com/users/16521381/mstephen19'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faStackOverflow} />
        </a>
        <a
          href='mailto:matthiasvstephens@gmail.com'
          rel='noreferrer'
          target='_blank'
        >
          <FontAwesomeIcon icon={faEnvelopeSquare} />
        </a>
      </div>
    </div>
  );
}
