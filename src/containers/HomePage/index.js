import React from 'react';

import Header from '../../components/Header';
import Contract from '../../components/Contract';

import styled from 'styled-components';
import '../../styles/base.css';

const AppWrapper = styled.div`
  padding: 5px;
`;

const FirstPage = () => {
  return (
    <div className='page'>
      <Header />
      <Contract />
    </div>
  );
};

const SecondPage = () => {
  return <div className='page'>Page 2</div>;
};

const ThirdPage = () => {
  return <div className='page'>Page 3</div>;
};

const FourthPage = () => {
  return <div className='page'>Page 4</div>;
};

const FifthPage = () => {
  return <div className='page'>Page 5</div>;
};

const HomePage = () => {
  return (
    <AppWrapper>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <FifthPage />
    </AppWrapper>
  );
};

export default HomePage;
