import React, { useContext, useState } from 'react';
import { LangContext } from '../../../App';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ArrowLeft from './ArrowLeft';
import ArrowRight from './ArrowRight';
import './carousel.css';
import SliderSlide from './SliderSlide';

import haunted from '../assets/haunted-demo.gif';
import notes from '../assets/notes-demo.gif';
import charity from '../assets/charity-demo.gif';
import omegle from '../assets/omegle-demo.gif';
import api from '../assets/api-demo.gif';

export default function TheCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  const lang = useContext(LangContext);

  const content = {
    title: lang === 'en' ? 'Projects' : 'Мои Проекты',
    btntxt: lang === 'en' ? 'See it on Github!' : 'Посмотреть на Github!',
  };

  const slides = [
    {
      image: haunted,
      link: 'https://warm-springs-18820.herokuapp.com/',
      ghlink: 'https://github.com/alonzofroman/haunted-forum',
    },
    {
      image: api,
      link: 'https://github.com/mstephen19/ecommerce-back-end',
      ghlink: 'https://github.com/mstephen19/ecommerce-back-end',
    },
    {
      image: charity,
      link: 'alonzofroman.github.io/charities-project/',
      ghlink: 'https://github.com/alonzofroman/charities-project',
    },
    {
      image: notes,
      link: 'https://salty-plateau-23106.herokuapp.com/notes',
      ghlink: 'https://github.com/mstephen19/noteTaker',
    },
    {
      image: omegle,
      link: 'https://www.linkedin.com/posts/mstephen19_javascript-project-video-activity-6846827501633855488-_tJj',
      ghlink: 'https://github.com/mstephen19/omegle-Chat-Bot',
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
            <SliderSlide
              image={obj.image}
              link={obj.link}
              btntxt={content.btntxt}
              ghlink={obj.ghlink}
            />
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
