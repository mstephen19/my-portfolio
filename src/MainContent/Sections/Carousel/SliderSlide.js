import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SliderSlide(props) {
  return (
    <div className='keen-slider__slide'>
      <a href={props.ghlink} target='_blank' rel='noreferrer'>
        <button className='ghBtn'>
          <FontAwesomeIcon icon={faGithub} />
          {props.btntxt}
        </button>
      </a>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={props.image} alt='' />
      </a>
    </div>
  );
}
