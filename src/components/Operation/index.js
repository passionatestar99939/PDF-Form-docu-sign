import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DefaultEditor } from 'react-simple-wysiwyg';
import {
  faPencil,
  faEnvelope,
  faDownload,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '../../store/store';
import {
  postDataAsync,
  requestDownloadAsync,
} from '../../store/slices/operationSlice';
import { updateSignStatus } from '../../store/slices/optionSlice';
import { BASE_URL } from '../../constants';

import './style.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
  },
};

const pdf_paths = [
  {
    id: 'pdf1',
    path: BASE_URL + '/pdfs/WW-Blinds-Between-The-Glass.pdf',
    title: 'WW - Blinds Between The Glass (PDF)',
    send: false,
  },
  {
    id: 'pdf2',
    path: BASE_URL + '/pdfs/WW-Peace-And-Quiet.pdf',
    title: 'WW - Peace and Quiet (PDF)',
    send: false,
  },
  {
    id: 'pdf3',
    path: BASE_URL + 'pdfs/WW-4000-Double-Hung-Windows.pdf',
    title: 'WW - 4000 Series Double Hung Windows (PDF)',
    send: false,
  },
  {
    id: 'pdf4',
    path: BASE_URL + '/pdfs/WW-Casements-and-Awnings.pdf',
    title: 'WW - 4000 Series Casement/Awning Windows (PDF)',
    send: false,
  },
  {
    id: 'pdf5',
    path: BASE_URL + '/pdfs/',
    title: 'WW - 4000 Series Patio Doors (PDF)',
    send: false,
  },
  {
    id: 'pdf6',
    path: BASE_URL + '/pdfs/WW-Basement-Hopper.pdf',
    title: 'WW - Basement Hopper Windows (PDF)',
    send: false,
  },
  {
    id: 'pdf7',
    path: BASE_URL + '/pdfs/WW-BAY-AND-BOW.pdf',
    title: 'WW - Bay and Bow Windows (PDF)',
    send: false,
  },
  {
    id: 'pdf8',
    path: BASE_URL + '/pdfs/WW_Repair_Labor_Guarantee.pdf',
    title: 'WW - Repair Labor Guarantee (PDF)',
    send: false,
  },
  {
    id: 'pdf9',
    path: BASE_URL + '/pdfs/WW-Garden-Window.pdf',
    title: 'WW - Garden Window (PDF)',
    send: false,
  },
];

const Operation = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [signature, setSignature] = useState(
    '<b>Nick Tisdale<br />Window World</b><br />ww@nicktisdale.com<br />(502) 310-9454<br /><br />'
  );

  const email = useSelector((state) => state.salesman.data.email);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const linkId = useSelector((state) => state.option.data.linkId);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const customerName = useSelector((state) => state.contact.data.customer);
  const address = useSelector((state) => state.contact.data.installAddr);
  const phoneNumber = useSelector((state) => state.contact.data.phone1);
  const dispatch = useDispatch();

  const handleSignEnable = (e) => {
    if (email === '') {
      toast.error('Enter the customer email.');
      return;
    }
    let data = store.getState();
    dispatch(
      postDataAsync({
        data: { customerEmail: email, contractInfo: data },
        url: 'signature',
      })
    );
  };

  const handleClose = () => setOpenModal(false);

  const handleSend = () => {
    let data = store.getState();
    let pdf_body =
      '<div>Here is some more information about the products we talked about: </div>';

    pdf_paths.forEach((value) => {
      let pdf_image_path = BASE_URL + '/images/pdf-attach.png';
      if (value.send === true) {
        pdf_body +=
          '<div style="display: flex; align-items: center;"><img alt="pdf" width="20px" src="' +
          pdf_image_path +
          '" /><a href="' +
          value.path +
          '">' +
          value.title +
          '</a></div><br />';
      }
    });

    dispatch(
      postDataAsync({
        data: {
          customer: {
            name: customerName,
            address: address,
            phoneNumber: phoneNumber,
          },
          email: {
            to: email,
            subject: subject,
            body: body + pdf_body,
            signature: signature,
          },
          contract_info: data,
        },
        url: 'contract',
      })
    );
    setOpenModal(false);
  };

  const handleSign = () => {
    let data = store.getState();
    dispatch(
      postDataAsync({
        data: {
          customer: {
            name: customerName,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
          },
          linkId: linkId,
          contractInfo: data,
        },
        url: 'signature',
      })
    );
  };

  const handleToggle = (e) => {
    const isChecked = e.target.checked;
    dispatch(updateSignStatus(isChecked));
  };

  const handleDownload = () => {
    let data = store.getState();
    dispatch(requestDownloadAsync({ contractInfo: data }));
  };

  const handlePdfSend = (e) => {
    pdf_paths.forEach((ele) => {
      if (ele.id === e.target.id) {
        ele.send = e.target.checked;
      }
    });
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
      {viewMode === 'sign' ? (
        <div className="operation-pad bottom">
          <div>
            <p className="p-h3">INSTALL & SIGN ALL APPLICABLE SECTIONS</p>
            <p className="p-h2">THEN CLICK SIGN & SUBMIT</p>
          </div>
          <button className="btn icon-btn sign-btn" onClick={handleSign}>
            <FontAwesomeIcon
              icon={faPencil}
              style={{ fontSize: 20, color: 'white', marginRight: 20 }}
            />
            <label className="sign-label">Sign</label>
          </button>
        </div>
      ) : viewMode === 'homepage' ? (
        <div className="operation-pad top">
          <button className="btn icon-btn" onClick={() => setOpenModal(true)}>
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ fontSize: 20, color: 'white', marginRight: 20 }}
            />
          </button>
          <button
            className="btn icon-btn"
            onClick={(e) => handleSignEnable(e)}
            disabled={!signStatus}
          >
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                fontSize: 20,
                color: signStatus === true ? 'white' : 'grey',
                marginRight: 20,
              }}
            />
          </button>
          <button className="btn icon-btn" onClick={handleDownload}>
            <FontAwesomeIcon
              icon={faDownload}
              style={{ fontSize: 20, color: 'white', marginRight: 20 }}
            />
          </button>
          <div className="flex-right">
            <input
              id="enableToggle"
              type="checkbox"
              onChange={(e) => handleToggle(e)}
            />
            <label htmlFor="enableToggle">Direct Sign</label>
          </div>
          <Modal
            isOpen={openModal}
            style={customStyles}
            className="email-modal"
            overlayClassName="myoverlay"
            closeTimeoutMS={200}
          >
            <div>
              <div className="email-box">
                <label htmlFor="customerEmail">CUSTOMER EMAIL</label>
                <input
                  className="bottom-outline width-100"
                  style={{ textAlign: 'left' }}
                  type="text"
                  id="customerEmail"
                  value={email}
                  readOnly
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="email-box">
                <label htmlFor="subject">SUBJECT</label>
                <input
                  className="bottom-outline width-100"
                  style={{
                    textAlign: 'left',
                    fontSize: '16px',
                    fontFamily: 'sans-serif',
                  }}
                  type="text"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <p>
                  <label htmlFor="body" style={{ margin: '4px' }}>
                    BODY
                  </label>
                </p>
                <DefaultEditor
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
              <br />
              <div>
                <p>
                  Here is some more information about the products we talked
                  about:
                </p>
                <div className="information-container">
                  {pdf_paths &&
                    pdf_paths.map((value, index) => (
                      <div key={index} className="info-line vertical-center">
                        <input
                          type="checkbox"
                          id={value.id}
                          onClick={(e) => handlePdfSend(e)}
                          defaultChecked={value.send}
                        />
                        <label htmlFor={value.id}>{value.title}</label>
                        &nbsp;&nbsp;&nbsp;
                        <img
                          alt="pdf"
                          src="/images/pdf-attach.png"
                          width={30}
                        />
                      </div>
                    ))}
                </div>
              </div>
              <br />
              <div></div>
              <br />
              <p>
                Click here to electronically sign:{' '}
                <span className="link-content">Window World Contract</span>
              </p>
              <br />
              <div>
                <p>
                  <label htmlFor="signature" style={{ margin: '4px' }}>
                    SIGNATURE
                  </label>
                </p>

                <DefaultEditor
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                />
              </div>
              <br />
              <div className="wrapper-center">
                <button className="btn sign-modal-btn" onClick={handleSend}>
                  Send
                </button>
                <button className="btn sign-modal-btn" onClick={handleClose}>
                  Close
                </button>
              </div>
            </div>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};

export default Operation;
