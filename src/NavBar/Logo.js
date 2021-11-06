import React from 'react';

export default function Logo() {
  const animateLogo = () => {
    console.log('hovered');
  };

  return (
    <div
      class='flexed'
      style={{ height: '15%', background: 'red', justifyContent: 'center' }}
    >
      <h1 onMouseOver={animateLogo}>M.S</h1>
    </div>
  );
}
