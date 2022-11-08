import React from 'react';

import Logo from '../Logo';
import Mark from '../Mark';

import './style.css';

const LeftContent = () => {
  return (
    <div
      style={{ width: '35%' }}
      className="header__left-content flex text-center"
    >
      <div>
        <p className="header__left-content__title">
          Window World of Kentuckiana
        </p>
        <p>2200 Brennen Business Court</p>
        <p>Louisville, KY 40299</p>
        <p>Phone: (502) 671-7777</p>
        <p>Fax: (502) 671-7766</p>
      </div>
      <img
        className="position-absolute"
        style={{ width: '30%', bottom: '0px', right: '0px' }}
        alt="good housekeeping mark"
        src="/images/good-housekeeping-mark.png"
      />
    </div>
  );
};

const RightContent = () => {
  return (
    <div
      style={{ width: '35%' }}
      className="header__right-content flex text-center"
    >
      <div>
        <p className="header__right-content__title">
          Window World of Elizabethtown
        </p>
        <p>3019 Ring Rd. Ste 110</p>
        <p>Elizabethtown, KY 42701</p>
        <p>Phone: (270) 861-8054</p>
        <p>Fax: (270) 861-8137</p>
      </div>
      <img
        className="position-absolute"
        style={{ width: '30%', bottom: '0px', left: '-18px' }}
        alt="good housekeeping mark"
        src="/images/children's mark.jpg"
      />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header-wrapper">
      <LeftContent />
      <Logo />
      <RightContent />
    </div>
  );
};

export default Header;
