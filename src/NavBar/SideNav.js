import React, { useState } from 'react';
import Links from './Links';
import Logo from './Logo';

export default function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav
        className={sidebar ? 'active' : 'hidden'}
        onMouseOver={showSidebar}
        onMouseOut={showSidebar}
      >
        <div
          className='flexed logoSpace'
          style={{ height: '15%', justifyContent: 'center' }}
        >
          <Logo />
        </div>
        <Links />
      </nav>
    </>
  );
}
