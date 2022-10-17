import React from 'react';

import './style.css';

const Paragraph = ({ children }) => {
  return (
    <div>
      <p className="paragraph">{children}</p>
    </div>
  );
};

export default Paragraph;
