import React from 'react';
import Bounce from 'react-reveal/Bounce';
import image from './profile.png';

export default function AboutMe() {
  return (
    <>
      <div className='title'>
        <h1>About</h1>
        <div className='line'></div>
      </div>
      <div className='contentWrapper'>
        <Bounce left>
          <img
            src={image}
            alt='Me'
            style={{ borderRadius: '100%', width: 'clamp(200px, 30vw, 500px)' }}
          />
        </Bounce>
      </div>
    </>
  );
}
