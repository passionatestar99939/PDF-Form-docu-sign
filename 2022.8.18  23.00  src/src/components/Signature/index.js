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

const Signature = ({ width, height }) => {
  const [imageURL, setImageURL] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const sigCanvas = useRef({});

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    setOpenModal(false);
  };
  return (
    <div className="signature">
      <div
        id="sign-button"
        className="sign-button"
        onClick={() => setOpenModal(true)}
        style={{ width: width, height: height }}
      >
        {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            className="sign-img"
            style={{ width: width, height: height }}
          />
        ) : null}
      </div>
      <Modal
        isOpen={openModal}
        style={customStyles}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <SignaturePad
          ref={sigCanvas}
          canvasProps={{ className: 'signatureCanvas' }}
        />
        <button onClick={save}>save</button>
        <button onClick={clear}>clear</button>
        <button onClick={() => setOpenModal(false)}>close</button>
      </Modal>
    </div>
  );
};

export default Signature;
