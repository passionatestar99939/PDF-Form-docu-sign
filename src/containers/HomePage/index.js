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

import styled from 'styled-components';
import '../../styles/base.css';
import PageTitle from '../../components/PageTitle';
import Paragraph from '../../components/Paragraph';

const AppWrapper = styled.div`
  padding: 5px;
`;

const Page1 = () => {
  return (
    <div className="page">
      <Header />
      <Contact />
      <CalculateTable />
      <Finance />
      <div>
        Notice to Owner: Do not sign this contract if blank. You are entitled to
        a copy of the contract at the time you sign. Owner agrees that failure
        to comply with the terms of this contract, including any addendums will
        entitle Window World to recover all incidental collection costs owed
        pursuant to this Contract including, but not limited to, reasonable
        attorney’s fees and court cost. The parties acknowledge that the terms
        and conditions set fourth in the Window installation Summary attached
        hereto as Addendum A is hereby incorporated in this Contract in its
        entirety. Warranty is not valid until Certificate of Completion is
        signed and balance paid in full.
      </div>
      <div>
        You the buyer may cancel this transaction at any time prior to midnight
        of the third business day after the date of this transaction. Notice of
        cancellation must be in writing postmarked no later than midnight of the
        following third business day. THIS IS A CUSTOM ORDER NOT FOR RESALE!
      </div>
      *Home owner is responsible for getting/paying for all permits and historic
      approval. If job is stopped due failure to obtain th Home owner is
      responsible for getting/paying for all permits and historic approval. If
      job is stopped due failure to obtain these, homeowner ese, homeowner is
      still responsible for full balance. is still responsible for full balance.
      <SalesmanOwner />
      <Footer />
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="page">
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
  return <div className="page">Page 3</div>;
};

const Page4 = () => {
  return <div className="page">Page 4</div>;
};

const Page5 = () => {
  return (
    <div className="page">
      <div>CREDIT CARD AUTHORIZATION FORM</div>
      <Contact />
      <PaymentLink />
    </div>
  );
};

const HomePage = () => {
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

export default HomePage;
