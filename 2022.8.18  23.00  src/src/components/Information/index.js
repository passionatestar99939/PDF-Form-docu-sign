import React from 'react';
import Label from '../Label';
import Input from '../Input';

import './style.css';

const Information = ({ children }) => {
  return (
    <>
      {children}
      <div className="information">
        <div>
          <Label>Job Name</Label>
          <Input addClass="width-40" />
          <Label>Phone#</Label>
          <Input addClass="width-40" />
        </div>
        <div>
          <Label>Address</Label>
          <Input />
        </div>
        <div>
          <Label>Window Color: </Label>
          <Label>Inside:</Label>
          <Input value="black" />
          <Label>Outside:</Label>
          <Input value="White" />
        </div>
      </div>
    </>
  );
};

export default Information;

// import styled from 'styled-components';

// const PageTitle = styled.h1`
//   text-decoration: underline;
//   font-size: 2em;
// `;

// export default PageTitle;
