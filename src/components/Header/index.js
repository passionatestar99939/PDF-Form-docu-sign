import React from 'react';

import Logo from '../Logo';
import Mark from '../Mark';

import './style.css';

const Content = () => {
  return (
    <div className='content'>
      <p className='title'>WW of Louisville</p>
      <p>2200 Brennen Business Court • Louisville, KY 40299</p>
      <p>Phone: (502) 671-7777 • Fax: (502) 671-7766</p>
      <p>www.WindowWorldLouisville.com</p>
    </div>
  );
};

const Header = () => {
  return (
    <div className='header-wrapper'>
      <Logo />
      <Content />
      <Mark />
    </div>
  );
};

export default Header;
