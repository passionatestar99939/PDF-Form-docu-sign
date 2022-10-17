import React, { useState, useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import Modal from 'react-modal';

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

const DrawBox = ({
  setVal,
  signId,
  addClass,
  updateSign,
  width,
  height,
  signStatus,
  viewMode,
  index,
  isSignMode = true,
}) => {
  const [imageURL, setImageURL] = useState(setVal);
  const [openModal, setOpenModal] = useState(false);

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    setOpenModal(false);
    updateSign({
      index: index,
      value: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
    });
  };

  const handleSignClick = () => {
    setOpenModal(signStatus);
  };

  // const signButtonClass = 'sign-button '.isSignMode
  //   ? 'yellow-background'
  //   : '';
  const signButtonClass = `sign-button ${
    isSignMode ? 'yellow-background' : ''
  }`;
  console.log('???=>sign:', signButtonClass, isSignMode);

  return (
    <div
      className={`signature ${addClass}`}
      style={{ width: width, height: height }}
    >
      {viewMode === 'convert-pdf' ? (
        <div
          id="sign-button"
          className="sign-button"
          style={{ width: width, height: height }}
        >
          <img
            src="/images/emtpy-sign.png"
            alt="empty"
            style={{ width: width, height: height }}
          />
          <img
            src={setVal ? setVal : '/images/emtpy-sign.png'}
            alt="my signature"
            className="sign-img"
            style={{ height: height - 5, marginTop: -height }}
          />
        </div>
      ) : (
        <div
          id="sign-button"
          className={signButtonClass}
          onClick={() => handleSignClick()}
          style={{ width: width, height: height }}
        >
          {imageURL ? (
            <img
              src={imageURL}
              alt="my signature"
              className="sign-img"
              style={{ height: height }}
            />
          ) : null}
        </div>
      )}
      <Modal
        isOpen={openModal}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{ className: 'signatureCanvas' }}
          dotSize={8}
          maxWidth={8}
        />
        <div style={{ textAlign: 'center' }}>
          <button onClick={save} className="modal-btn">
            {isSignMode ? 'Sign' : 'Draw'}
          </button>
          <button onClick={clear} className="modal-btn">
            Clear
          </button>
          <button onClick={() => setOpenModal(false)} className="modal-btn">
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default DrawBox;
