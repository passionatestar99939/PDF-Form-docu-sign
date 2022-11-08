import React from 'react';

import './style.css';

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p className="x-small text-center">
          This Window World® Franchise is independently owned and operated by CP
          Investments d/b/a WW of Louisville under license from Window World,
          Inc.
        </p>
      </div>
      <div className="footer-wrapper">
        <div className="text-small text-red">Louisville Window 03-22 Valid-30 days</div>
        <div className="x-small">
          <strong>White Copy</strong> - Original <strong>Yellow Copy</strong> -
          File Pin
        </div>
        <div className="x-small">Hayes Printing 336.667.1116</div>
      </div>
    </div>
  );
};

export default Footer;
