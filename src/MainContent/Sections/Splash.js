import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Splash extends React.Component {
  render() {
    return (
      <Bounce left>
        <div style={{ display: 'flex' }}>
          <h1 className='M name'>M</h1>
          <h1 className='A name'>A</h1>
          <h1 className='T name'>T</h1>
          <h1 className='T2 name'>T</h1>
        </div>
        <h1 className='name'>STEPHENS</h1>
        <p>Full-Stack Developer</p>
      </Bounce>
    );
  }
}
