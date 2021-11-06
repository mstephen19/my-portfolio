import React from 'react';
import Bounce from 'react-reveal/Bounce';

export default class AboutMe extends React.Component {
  render() {
    return (
      <Bounce left>
        <h1>This is the AboutMe section</h1>
        <h2>Hi, my name is matt and blah blah blah</h2>
        <h3>This was made in react yadda yadda</h3>
        <h4>talk about skills</h4>
      </Bounce>
    );
  }
}
