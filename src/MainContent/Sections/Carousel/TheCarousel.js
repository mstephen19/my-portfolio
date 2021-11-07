import React, { useContext } from 'react';
import { LangContext } from '../../../App';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import './carousel.css';
import SliderSlide from './SliderSlide';
import Bounce from 'react-reveal/Bounce';

import haunted from '../assets/haunted-demo.gif';
import notes from '../assets/notes-demo.gif';

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

  const slides = [
    {
      image: haunted,
      link: 'https://warm-springs-18820.herokuapp.com/',
    },
    {
      image: notes,
      link: 'https://salty-plateau-23106.herokuapp.com/notes',
    },
  ];

  return (
    <>
      <div className='title'>
        <h1>{content.title}</h1>
        <div className='line'></div>
      </div>
      <div className='contentWrapper' style={{ flexDirection: 'row' }}>
        <div ref={sliderRef} className='keen-slider'>
          {slides.map((obj) => (
            <SliderSlide image={obj.image} link={obj.link} />
          ))}
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
