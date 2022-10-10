import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import axios from 'axios';

import { store } from '../../store/store';

import PageWrapper from '../../converts/PageWrapper';
import MeasureSheet from '../../converts/MeasureSheet';
import WindowOrder from '../../converts/WindowOrder';
import PatioDoorOrder from '../../converts/PatioDoorOrder';

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

const MeasureSheetPage = () => {
  return (
    <PageWrapper addClass="page pdf-page-portrait">
      <MeasureSheet />
    </PageWrapper>
  );
};

const WindowOrderPage = () => {
  return (
    <PageWrapper addClass="page pdf-page-portrait">
      <WindowOrder />
    </PageWrapper>
  );
};

const PatioDoorOrderPage = () => {
  return (
    <PageWrapper addClass="page pdf-page-portrait">
      <PatioDoorOrder />
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

const ConvertConsultantPage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;

  dispatch(updateData({ dataKey: 'linkId', data: id }));
  dispatch(updateData({ dataKey: 'viewMode', data: 'convert-consultant' }));

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`${API_URL}/contract/${id}`);
      let data = JSON.parse(response.data.contract_info);
      console.log({ data });
      updateStore(data);
    }

    getData();
  }, [id]);

  return (
    <AppWrapper>
      <MeasureSheetPage />
      <WindowOrderPage />
      <PatioDoorOrderPage />
    </AppWrapper>
  );
};

export default ConvertConsultantPage;
