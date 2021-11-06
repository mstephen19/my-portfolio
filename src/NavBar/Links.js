import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faEnvelope,
  faHome,
  faInfo,
  faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';
import './nav.css';

export default function Links() {
  return (
    <div class='flexed' style={{ height: '85%' }}>
      <div class='flexed' style={{ height: '70%' }}>
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
      <div class='flexed' style={{ height: '30%' }}>
        <a href='https://google.com'>
          <FontAwesomeIcon icon={faCoffee} />
        </a>
      </div>
    </div>
  );
}
