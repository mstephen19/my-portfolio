import React, { useContext } from 'react';
import { LangContext } from '../../../App';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import './carousel.css';

import image from '../profile.png';

export default function TheCarousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

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
      <div className='contentWrapper' style={{ flexDirection: 'row' }}>
        <div ref={sliderRef} className='keen-slider'>
          <div className='keen-slider__slide'>
            <img src={image} alt='' />
          </div>
          <div className='keen-slider__slide'>2</div>
          <div className='keen-slider__slide'>3</div>
          <div className='keen-slider__slide'>4</div>
          <div className='keen-slider__slide'>5</div>
          <div className='keen-slider__slide'>6</div>
        </div>
        {slider && (
          <>
            <ArrowLeft
              onClick={(e) => e.stopPropagation() || slider.prev()}
              disabled={currentSlide === 0}
            />
            <ArrowRight
              onClick={(e) => e.stopPropagation() || slider.next()}
              disabled={currentSlide === slider.details().size - 1}
            />
          </>
        )}
      </div>
    </>
  );
}
