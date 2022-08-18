import React from 'react';

import Header from '../../components/Header';
import Contact from '../../components/Contact';
import CalculateTable from '../../components/CalculateTable';
import Finance from '../../components/Finance';
import SalesmanOwner from '../../components/SalesmanOwner';
import Footer from '../../components/Footer';
import Content from '../../components/Content';
import SalesPersonOwner from '../../components/SalesPersonOwner';
import PaymentLink from '../../components/PaymentLink';
import JobAddress from '../../components/JobAddress';
import RoomTable from '../../components/RoomTable';
import Note from '../../components/Note';
import ExtraInfo from '../../components/ExtraInfo';
import Operation from '../../components/Operation';
import PageTitle from '../../components/PageTitle';
import Paragraph from '../../components/Paragraph';
import Information from '../../components/Information';
import BottomOfPage3 from '../../components/BottomOfPage3';
import MiddleOfPage3 from '../../components/MiddleOfPage3';
import WindowTable from '../../components/WindowTable';

import styled from 'styled-components';
import '../../styles/base.css';

const AppWrapper = styled.div`
  padding: 5px;
`;

const Page1 = () => {
  return (
    <div className="pdf-page">
      <Header />
      <Contact />
      <CalculateTable />
      <SalesmanOwner />
      <Footer />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="pdf-page">
      <PageTitle>
        <div class="page_title">PREPARING FOR YOUR NEW WINDOWS AND DOORS</div>
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
    <div className="pdf-page">
      <Information></Information>
      <WindowTable colNames={colNames} rowCount={15} firstNoOfRow={1} />
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
    <div className="pdf-page">
      <Information></Information>
      <WindowTable colNames={colNames} rowCount={30} firstNoOfRow={16} />
    </div>
  );
};

const Page5 = () => {
  return (
    <div className="pdf-page page5">
      <div>CREDIT CARD AUTHORIZATION FORM</div>
      <Contact />
      <PaymentLink />
    </div>
  );
};

const PDFPage = () => {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
    </>
  );
};

export default PDFPage;
