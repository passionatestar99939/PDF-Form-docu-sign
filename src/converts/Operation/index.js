import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencil,
  faEnvelope,
  faDownload,
  faVoicemail,
  faPrint,
} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { store } from '../../store/store';
import {
  postDataAsync,
  requestDownloadAsync,
} from '../../store/slices/operationSlice';
import { updateSignStatus } from '../../store/slices/optionSlice';

import './style.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
  },
};

const Operation = (props) => {
  const [openModal, setOpenModal] = useState(false);
  // const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  let initial_sig =
    'Thanks\n__\n' + 'Nick Tisdale' + '\nWindow World\n' + '(502) 310-9454';
  const [signature, setSignature] = useState(initial_sig);

  const email = useSelector((state) => state.salesman.data.email);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const linkId = useSelector((state) => state.option.data.linkId);
  const status = useSelector((state) => state.option.data.loading);
  const signStatus = useSelector((state) => state.option.data.signStatus);

  // const signature = [];
  // signature.push(useSelector((state) => state.windowworld.data.signature));
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
    dispatch(
      postDataAsync({
        data: {
          email: {
            to: email,
            subject: subject,
            body: body,
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
        data: { linkId: linkId, contractInfo: data },
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
                <label for="customerEmail">CUSTOMER EMAIL</label>
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
                <label for="subject">SUBJECT</label>
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
                  <label for="body" style={{ margin: '4px' }}>
                    BODY
                  </label>
                </p>
                <textarea
                  id="body"
                  onChange={(e) => setBody(e.target.value)}
                  className="email-body"
                />
              </div>
              <br />
              <p>
                Click here to electronically sign:{' '}
                <span className="link-content">Window World Contract</span>
              </p>
              <br />
              <div>
                <p>
                  <label for="signature" style={{ margin: '4px' }}>
                    SIGNATURE
                  </label>
                </p>
                <textarea
                  id="signature"
                  onChange={(e) => setSignature(e.target.value)}
                  value={signature}
                  className="email-body"
                  contenteditable="true"
                />
              </div>
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
