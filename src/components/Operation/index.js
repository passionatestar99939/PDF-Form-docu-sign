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

import './style.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Operation = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const viewMode = useSelector((state) => state.option.data.viewMode);
  const linkId = useSelector((state) => state.option.data.linkId);
  const status = useSelector((state) => state.option.data.loading);
  const dispatch = useDispatch();

  const handleFetch = () => {};

  const handleClose = () => setOpenModal(false);

  const handleSend = () => {
    let data = store.getState();
    dispatch(
      postDataAsync({
        data: {
          email: { to: email, subject: subject, body: body },
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

  const handleDownload = () => {
    dispatch(requestDownloadAsync(linkId));
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
            <label style={{ color: 'white' }}>Sign</label>
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
          <button className="btn icon-btn" onClick={handleFetch}>
            <FontAwesomeIcon
              icon={faPrint}
              style={{ fontSize: 20, color: 'white', marginRight: 20 }}
            />
          </button>
          <button className="btn icon-btn" onClick={handleDownload}>
            <FontAwesomeIcon
              icon={faDownload}
              style={{ fontSize: 20, color: 'white', marginRight: 20 }}
            />
          </button>
          <Modal
            isOpen={openModal}
            style={customStyles}
            className="email-modal"
            overlayClassName="myoverlay"
            closeTimeoutMS={200}
          >
            <div>
              <div>
                <label for="customerEmail">CUSTOMER EMAIL</label>
                <input
                  type="text"
                  id="customerEmail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label for="subject">SUBJECT</label>
                <input
                  type="text"
                  id="subject"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div>
                <label for="body">BODY</label>
                <textarea id="body" onChange={(e) => setBody(e.target.value)} />
              </div>
              <button className="btn sign-modal-btn" onClick={handleSend}>
                Send
              </button>
              <button className="btn sign-modal-btn" onClick={handleClose}>
                Close
              </button>
            </div>
          </Modal>
        </div>
      ) : null}
    </div>
  );
};

export default Operation;
