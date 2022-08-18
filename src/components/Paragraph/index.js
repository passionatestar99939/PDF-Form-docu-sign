import React from 'react';

import './style.css';

const Paragraph = ({ children }) => {
  return (
    <div>
      <p className="paragraph">
        {children}
        {/* <div class="page_title">PREPARING FOR YOUR NEW WINDOWS AND DOORS</div> */}
      </p>
    </div>
  );
};

export default Paragraph;
