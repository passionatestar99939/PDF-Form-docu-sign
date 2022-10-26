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

const Signature = ({
  imgInfo,
  signId,
  addClass,
  updateSign,
  width,
  height,
  signStatus,
  viewMode,
  style,
  isSignMode = true,
}) => {
  const [openModal, setOpenModal] = useState(false);

  const sigCanvas = useRef({});

  const imgTargetRef = useRef();
  // const sizeStyle = useRef({});
  // let sizeStyle = style ? JSON.parse(style) : {};
  let sizeStyle = style;

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    setOpenModal(false);
    // updateSign(sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'));
    const imgOriginalSize = {
      width: parseInt(
        sigCanvas.current.getTrimmedCanvas().getAttribute('width')
      ),
      height: parseInt(
        sigCanvas.current.getTrimmedCanvas().getAttribute('height')
      ),
    };
    // console.log('???=>Canvas', imgOriginalSize);
    // console.log(
    //   '???=>target',
    //   imgTargetRef.current.offsetWidth,
    //   ',',
    //   imgTargetRef.current.offsetHeight
    // );

    let qHeight, qWidth;
    qHeight =
      (1.0 * imgTargetRef.current.offsetHeight) / imgOriginalSize.height;
    qWidth = (1.0 * imgTargetRef.current.offsetWidth) / imgOriginalSize.width;
    sizeStyle = qHeight < qWidth ? { height: '100%' } : { width: '100%' };

    updateSign({
      value: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
      style: sizeStyle,
    });
  };

  const handleSignClick = () => {
    setOpenModal(signStatus);
  };

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
            src={imgInfo ? imgInfo : '/images/emtpy-sign.png'}
            alt="my signature"
            className="sign-img"
            style={{ height: height - 5, marginTop: -height }}
          />
        </div>
      ) : (
        <div
          id="sign-button"
          className={'sign-button yellow-background centering'}
          onClick={() => handleSignClick()}
          style={{ width: width, height: height }}
          ref={imgTargetRef}
        >
          {imgInfo ? (
            <img
              src={imgInfo}
              alt="my signature"
              className="sign-img"
              style={sizeStyle}
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

export default Signature;
