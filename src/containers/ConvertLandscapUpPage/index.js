import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';

import { store } from '../../store/store';

import Header from '../../converts/Header';
import Contact from '../../converts/Contact';
import CalculateTable from '../../converts/CalculateTable';
import SalesmanOwner from '../../converts/SalesmanOwner';
import Footer from '../../converts/Footer';
import Content from '../../converts/Content';
import SalesPersonOwner from '../../converts/SalesPersonOwner';
import PaymentLink from '../../converts/PaymentLink';
import PageTitle from '../../converts/PageTitle';
import Paragraph from '../../converts/Paragraph';
import Information from '../../converts/Information';
import BottomOfPage3 from '../../converts/BottomOfPage3';
import MiddleOfPage3 from '../../converts/MiddleOfPage3';
import WindowTable from '../../converts/WindowTable';

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
import { updateDataMeasureSheet } from '../../store/slices/measuresheetSlice';
import { updateDataPatioDoor } from '../../store/slices/patioDoorOrderSlice';
import { updateDataWindowOrder } from '../../store/slices/windoworderSlice';
import { updateDataSalesInfo } from '../../store/slices/salesInfoSlice';

import { API_URL } from '../../constants';
import styled from 'styled-components';

import '../../styles/base.css';

const AppWrapper = styled.div`
  padding: 5px;
  background-color: black;
`;

const Page1 = () => {
  return (
    <div className="pdf-page" id="page1">
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
    <div className="pdf-page" id="page2">
      <PageTitle>
        <div className="page_title" style={{ margin: '50px 0px' }}>
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
        <div style={{ marginTop: '50px' }}>
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
    <div className="pdf-page" id="page3">
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
    <div className="pdf-page" id="page4">
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
    <div className="pdf-page page5" id="page5">
      <div style={{ marginTop: '90px', marginBottom: '40px' }}>
        CREDIT CARD AUTHORIZATION FORM
      </div>
      <Contact addStyle={{ marginBottom: '10px' }} />
      <PaymentLink />
    </div>
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

const ConvertLandscapUpPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  dispatch(updateData({ dataKey: 'linkId', data: id }));
  dispatch(updateData({ dataKey: 'viewMode', data: 'convert-landscape-up' }));

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${API_URL}/contract/${id}`);
      let data = JSON.parse(response.data.contract_info);
      console.log({ data });
      updateStore(data);
    }

    getData();
  }, []);

  return (
    <AppWrapper>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </AppWrapper>
  );
};

export default ConvertLandscapUpPage;
