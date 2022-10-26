import React, { useState, useRef } from 'react';
import SignaturePad from 'react-signature-canvas';
import Modal from 'react-modal';

import './style.css';

const DrawBox = ({
  imgInfo,
  signId,
  addClass,
  updateSign,
  width,
  height,
  signStatus,
  viewMode,
  style,
  index,
}) => {
  // const [imageURL, setImageURL] = useState(imgInfo);
  const [openModal, setOpenModal] = useState(false);
  const sigCanvas = useRef({});
  const imgTargetRef = useRef();

  // let sizeStyle = style ? JSON.parse(style) : {};
  let sizeStyle = style;

  const clear = () => sigCanvas.current.clear();
  const save = () => {
    const imgOriginalSize = {
      width: parseInt(
        sigCanvas.current.getTrimmedCanvas().getAttribute('width')
      ),
      height: parseInt(
        sigCanvas.current.getTrimmedCanvas().getAttribute('height')
      ),
    };

    let qHeight, qWidth;
    qHeight =
      (1.0 * imgTargetRef.current.offsetHeight) / imgOriginalSize.height;
    qWidth = (1.0 * imgTargetRef.current.offsetWidth) / imgOriginalSize.width;
    sizeStyle = qHeight < qWidth ? { height: '100%' } : { width: '100%' };

    imgInfo = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    if (index !== undefined) {
      updateSign({
        index: index,
        value: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
        style: sizeStyle,
      });
    } else {
      updateSign({
        value: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png'),
        style: sizeStyle,
      });
    }
    setOpenModal(false);
  };

  const handleSignClick = () => {
    setOpenModal(signStatus);
  };

  const imgRef = useRef();

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
          className={'sign-button centering'}
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
              ref={imgRef}
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
          dotSize={4}
          maxWidth={4}
        />
        <div style={{ textAlign: 'center' }}>
          <button onClick={save} className="modal-btn">
            Draw
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
