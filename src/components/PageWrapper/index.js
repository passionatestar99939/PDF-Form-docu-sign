import React from "react";

import "./style.css";

const PageWrapper = (props) => {
  const { children } = props;
  return <div className='page'>{children}</div>;
};

export default PageWrapper;
