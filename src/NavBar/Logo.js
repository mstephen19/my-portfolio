import React from 'react';
import './nav.css';

export default function Logo({ ...rootDOMAttributes }) {
  return (
    <h1 className='logo' {...rootDOMAttributes}>
      M.S
    </h1>
  );
}
