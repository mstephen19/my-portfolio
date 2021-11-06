import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class Carousel extends React.Component {
  render() {
    return (
      <Bounce left>
        <h1>Show off projects</h1>
      </Bounce>
    );
  }
}
