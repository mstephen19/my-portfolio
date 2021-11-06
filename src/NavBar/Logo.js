import React from 'react';
import './nav.css'

export default function Logo() {
  const animateLogo = () => {
    console.log('hovered');
  };

  return (
    <div
      class='flexed logo'
      style={{ height: '15%', justifyContent: 'center' }}
    >
      <h1 onMouseOver={animateLogo}>M.S</h1>
    </div>
  );
}
