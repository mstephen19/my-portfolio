import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Splash extends React.Component {
  render() {
    return (
      <Bounce left>
        <h1>This is the Splash Section</h1>
        <h2>Matt Stephens</h2>
        <h3>Full-Stack Web Engineer</h3>
      </Bounce>
    );
  }
}

