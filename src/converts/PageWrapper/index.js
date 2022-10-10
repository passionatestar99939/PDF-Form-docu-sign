import React from 'react';

import './style.css';

const PageWrapper = (props) => {
  const { children, addClass } = props;
  return <div className={addClass}>{children}</div>;
};

export default PageWrapper;
