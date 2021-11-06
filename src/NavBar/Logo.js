import React from 'react';
import './nav.css';

export default function Logo({ ...rootDOMAttributes }) {
  return (
    <>
      <h1 className='logo' {...rootDOMAttributes}>
        M.S
      </h1>
      <p style={{ fontSize: '0.6rem' }}>Matt Stephens</p>
    </>
  );
}
