import React from 'react';

export default function SliderSlide(props) {
  return (
    <div className='keen-slider__slide'>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <img src={props.image} alt='' />
      </a>
    </div>
  );
}
