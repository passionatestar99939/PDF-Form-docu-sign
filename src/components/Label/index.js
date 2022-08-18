import React from 'react';

import './style.css';

const Label = ({ children }) => {
  return (
    <span className="label">
      {children}
      {/* <div class="page_title">PREPARING FOR YOUR NEW WINDOWS AND DOORS</div> */}
    </span>
  );
};

export default Label;
