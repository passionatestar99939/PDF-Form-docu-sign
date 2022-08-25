import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateData } from '../../store/slices/optionSlice';
import { Watch } from 'react-loader-spinner';
import Loader from 'react-loader-advanced';

import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CalculateTable from '../../components/CalculateTable';
import SalesmanOwner from '../../components/SalesmanOwner';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SalesPersonOwner from '../../components/SalesPersonOwner';
import PaymentLink from '../../components/PaymentLink';
import Operation from '../../components/Operation';
import PageTitle from '../../components/PageTitle';
import Paragraph from '../../components/Paragraph';
import Information from '../../components/Information';
import BottomOfPage3 from '../../components/BottomOfPage3';
import MiddleOfPage3 from '../../components/MiddleOfPage3';
import WindowTable from '../../components/WindowTable';

import styled from 'styled-components';
import '../../styles/base.css';
import '../../App.css';

const AppWrapper = styled.div`
  padding: 100px 0 0 0;
  background-color: black;
`;

const Page1 = () => {
  return (
    <div className="page" id="page1">
      <Header />
      <Contact />
      <CalculateTable isInputEnable={true} />
      <SalesmanOwner />
      <Footer />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="page" id="page2">
      <PageTitle>
        <div className="page_title">
          PREPARING FOR YOUR NEW WINDOWS AND DOORS
        </div>
      </PageTitle>
      <Content />
      <SalesPersonOwner />
      <Paragraph>
        <div
          style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.2em' }}
        >
          P.S. Now would be a good time to review contract with the salesman to
          be sure of your order options and work to be done. Only the items and
          services on the contract will be done. If you have any questions
          whatsoever, now is the time to ask.
        </div>
      </Paragraph>
    </div>
  );
};

const Page3 = () => {
  const colNames = [
    'No.',
    'Room',
    'Style',
    'Grids',
    'LE',
    'Size',
    'Mull',
    'Window Note',
  ];
  return (
    <div className="page" id="page3">
      <Information />
      <WindowTable
        isInputEnable={true}
        colNames={colNames}
        rowCount={24}
        firstNoOfRow={1}
      />
      <MiddleOfPage3 />
      <BottomOfPage3 />
    </div>
  );
};

const Page4 = () => {
  const colNames = [
    'No.',
    'Room',
    'Style',
    'Grids',
    'LE',
    'Size',
    'Mull',
    'Window Note',
  ];
  return (
    <div className="page" id="page4">
      <Information />
      <WindowTable
        isInputEnable={true}
        colNames={colNames}
        rowCount={44}
        firstNoOfRow={25}
      />
    </div>
  );
};

const Page5 = () => {
  return (
    <div className="page page5" id="page5">
      <div style={{ marginBottom: '10px' }}>CREDIT CARD AUTHORIZATION FORM</div>
      <Contact addStyle={{ marginBottom: '10px' }} />
      <PaymentLink />
    </div>
  );
};

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const HomePage = () => {
  // const { height, width } = useWindowDimensions();
  useWindowDimensions();
  const loading = useSelector((state) => state.operation.loading);
  const dispatch = useDispatch();
  dispatch(updateData({ dataKey: 'viewMode', data: 'homepage' }));

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const spinner = (
    <Watch
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={style}
      wrapperClassName=""
      visible={true}
    />
  );

  return (
    <>
      <div
        className="App"
        style={{ transform: `scale(${window.innerWidth / 1366})` }}
      >
        <AppWrapper id="appwrapper">
          <Loader show={loading === 'pending' ? true : false} message={spinner}>
            <Page1 />
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
          </Loader>
        </AppWrapper>
      </div>
      <Operation />
    </>
  );
};

export default HomePage;
