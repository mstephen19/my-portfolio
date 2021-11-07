import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Bounce from 'react-reveal/Bounce';

export default function SliderSlide(props) {
  return (
    <div className='keen-slider__slide'>
      {/* This bounce is not working as expected here, but it does give a nice fade haha */}
      <Bounce left>
        <a href={props.ghlink} target='_blank' rel='noreferrer'>
          <button className='ghBtn'>
            <FontAwesomeIcon icon={faGithub} />
            {props.btntxt}
          </button>
        </a>
      </Bounce>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={props.image} alt='' />
      </a>
    </div>
  );
}
