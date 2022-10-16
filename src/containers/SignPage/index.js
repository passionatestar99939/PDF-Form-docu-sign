import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Watch } from 'react-loader-spinner';
import Loader from 'react-loader-advanced';
import { store } from '../../store/store';

import PageWrapper from '../../components/PageWrapper';
import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CalculateTable from '../../components/CalculateTable';
import SalesmanOwner from '../../components/SalesmanOwner';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SalesPersonOwner from '../../components/SalesPersonOwner';
import PaymentLink from '../../components/PaymentLink';
import PageTitle from '../../components/PageTitle';
import Paragraph from '../../components/Paragraph';
import Information from '../../components/Information';
import BottomOfPage3 from '../../components/BottomOfPage3';
import MiddleOfPage3 from '../../components/MiddleOfPage3';
import WindowTable from '../../components/WindowTable';
import Operation from '../../components/Operation';
import MeasureSheet1 from '../../components/MeasureSheet';
import WindowOrder from '../../components/WindowOrder';
import SalesConsultant from '../../components/SalesConsultant';
import PatioDoorOrder from '../../components/PatioDoorOrder';
import CreditCardForm from '../../components/CreditCardForm';

import { fetchDataAsync } from '../../store/slices/operationSlice';
import { updateData } from '../../store/slices/optionSlice';
import { updateDataContact } from '../../store/slices/contactSlice';
import { updateDataBottompage } from '../../store/slices/bottompage3Slice';
import { updateDataCalculate } from '../../store/slices/calculateSlice';
import { updateDataCredit } from '../../store/slices/creditSlice';
import { updateDataGlassoption } from '../../store/slices/glassoptionSlice';
import { updateDataJobinfo } from '../../store/slices/jobinfoSlice';
import { updateDataMiscellenous } from '../../store/slices/miscellenousSlice';
import { updateDataPrebuilt } from '../../store/slices/prebuiltSlice';
import { updateDataRoundup } from '../../store/slices/roundupSlice';
import { updateDataSalesman } from '../../store/slices/salesmanSlice';
import { updateDataSalesperson } from '../../store/slices/salespersonSlice';
import { updateDataTable23 } from '../../store/slices/table23Slice';
import { updateDataTable33 } from '../../store/slices/table33Slice';
import { updateDataTable43 } from '../../store/slices/table43Slice';
import { updateDataVinylsliding } from '../../store/slices/vinylslidingSlice';
import { updateDataWindowoption } from '../../store/slices/windowoptionSlice';
import { updateDataWindowtable } from '../../store/slices/windowtableSlice';
import { updateDataWindowworld } from '../../store/slices/windowworldSlice';
import { updateSignStatus } from '../../store/slices/optionSlice';
import { updateDataMeasureSheet } from '../../store/slices/measuresheetSlice';
import { updateDataPatioDoor } from '../../store/slices/patioDoorOrderSlice';
import { updateDataWindowOrder } from '../../store/slices/windoworderSlice';
import { updateDataSalesInfo } from '../../store/slices/salesInfoSlice';

import styled from 'styled-components';

import '../../styles/base.css';

const AppWrapper = styled.div`
  padding: 100px 0 0 0;
  background-color: black;
`;

const Page1 = () => {
  return (
    <div className="page" id="page1">
      <Header />
      <Contact />
      <CalculateTable isInputEnable={false} />
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

        <div style={{ marginTop: '40px' }}>
          <small>Louisville Window 03-22 Valid-30 days</small>
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
        isInputEnable={false}
        colNames={colNames}
        rowCount={29}
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
        isInputEnable={false}
        colNames={colNames}
        rowCount={49}
        firstNoOfRow={30}
      />
    </div>
  );
};

const Page5 = () => {
  return (
    <div className="page page5" id="page5">
      <div style={{ marginBottom: '40px' }}>CREDIT CARD AUTHORIZATION FORM</div>
      <Contact addStyle={{ marginBottom: '10px' }} />
      <PaymentLink />
    </div>
  );
};

const MeasureSheetPage = () => {
  return (
    <PageWrapper>
      <MeasureSheet1 />
    </PageWrapper>
  );
};

const WindowOrderPage = () => {
  return (
    <PageWrapper>
      <WindowOrder />
    </PageWrapper>
  );
};

const SalesConsultantPage = () => {
  return (
    <PageWrapper>
      <SalesConsultant />
    </PageWrapper>
  );
};

const PatioDoorOrderPage = () => {
  return (
    <PageWrapper>
      <PatioDoorOrder />
    </PageWrapper>
  );
};

const CreditCardPage = () => {
  return (
    <PageWrapper>
      <CreditCardForm />
    </PageWrapper>
  );
};

const updateStore = (data) => {
  store.dispatch(updateDataContact(data.contact.data));
  store.dispatch(updateDataBottompage(data.bottompage3.data));
  store.dispatch(updateDataCalculate(data.calculate.data));
  store.dispatch(updateDataCredit(data.credit.data));
  store.dispatch(updateDataGlassoption(data.glassoption.data));
  store.dispatch(updateDataPrebuilt(data.prebuilt.data));
  store.dispatch(updateDataJobinfo(data.jobinfo.data));
  store.dispatch(updateDataMiscellenous(data.miscellenous.data));
  store.dispatch(updateDataRoundup(data.roundup.data));
  store.dispatch(updateDataSalesman(data.salesman.data));
  store.dispatch(updateDataSalesperson(data.salesperson.data));
  store.dispatch(updateDataTable23(data.table23.data));
  store.dispatch(updateDataTable33(data.table33.data));
  store.dispatch(updateDataTable43(data.table43.data));
  store.dispatch(updateDataVinylsliding(data.vinylsliding.data));
  store.dispatch(updateDataWindowoption(data.windowoption.data));
  store.dispatch(updateDataWindowtable(data.windowtable.data));
  store.dispatch(updateDataWindowworld(data.windowworld.data));
  store.dispatch(updateDataMeasureSheet(data.measuresheet.data));
  store.dispatch(updateDataPatioDoor(data.patiodoororder.data));
  store.dispatch(updateDataWindowOrder(data.windoworder.data));
  store.dispatch(updateDataSalesInfo(data.salesInfo.data));
};
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
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
}

const SignPage = () => {
  useWindowDimensions();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.operation.loading);
  const params = useParams();
  const { id } = params;

  dispatch(updateData({ dataKey: 'linkId', data: id }));
  dispatch(updateData({ dataKey: 'viewMode', data: 'sign' }));
  dispatch(updateSignStatus(true));

  useEffect(() => {
    async function getData() {
      const data = await dispatch(fetchDataAsync(id)).unwrap();
      updateStore(data);
    }

    getData();
  }, [id]);

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
      <Loader
        backgroundStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        show={loading === 'pending' ? true : false}
        message={spinner}
      >
        <div
          className="App"
          style={{ transform: `scale(${window.innerWidth / 1366})` }}
        >
          <AppWrapper id="appwrapper">
            <Loader show={loading === 'pending' ? true : false} message={<></>}>
              <Page1 />
              <Page2 />
              <MeasureSheetPage />
              <WindowOrderPage />
              <SalesConsultantPage />
              <PatioDoorOrderPage />
              <CreditCardPage />
            </Loader>
          </AppWrapper>
        </div>
      </Loader>
      <Operation />
    </>
  );
};

export default SignPage;
