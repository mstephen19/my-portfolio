import React, { useState } from 'react';
import Links from './Links';
import Logo from './Logo';

export default function SideNav() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <button onClick={showSidebar}>Test</button>
      <nav className={sidebar ? 'active' : 'hidden'}>
        <Logo />
        <Links />
      </nav>
    </>
  );
}
