import React from 'react';

import './style.css';

const Paragraph = ({ children }) => {
  return (
    <p class="paragraph">
      {children}
      {/* <div class="page_title">PREPARING FOR YOUR NEW WINDOWS AND DOORS</div> */}
    </p>
  );
};

export default Paragraph;
