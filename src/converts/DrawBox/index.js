import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
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

  console.log('???=>index:', index);
  console.log('???=> first size style:', sizeStyle);

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
    console.log('???=>Canvas', imgOriginalSize);
    console.log(
      '???=>target',
      imgTargetRef.current.offsetWidth,
      ',',
      imgTargetRef.current.offsetHeight
    );

    let qHeight, qWidth;
    qHeight =
      (1.0 * imgTargetRef.current.offsetHeight) / imgOriginalSize.height;
    qWidth = (1.0 * imgTargetRef.current.offsetWidth) / imgOriginalSize.width;
    sizeStyle = qHeight < qWidth ? { height: '100%' } : { width: '100%' };
    console.log('???=> size style while saving:', sizeStyle);

    imgInfo = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png');
    if (index != undefined) {
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

  // useEffect(() => {
  //   if (imgRef.current) {
  //     console.log('???=>offsetWidth:', imgRef.current.offsetWidth);
  //     // console.log('???=>clientWidth:', imgRef.current.clientWidth);
  //   }
  //   return () => {
  //     // useEffect(() => {
  //     if (imgRef.current) {
  //       console.log('???=>offsetWidth:=== clear', imgRef.current.offsetWidth);
  //       // console.log('???=>clientWidth:', imgRef.current.clientWidth);
  //     }
  //   };
  // });

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
              // style={
              //   (1.0 * imgTargetRef.current.offsetHeight) /
              //     imgOriginalSize.height <
              //   (1.0 * imgTargetRef.current.offsetWidth) / imgOriginalSize.width
              //     ? { height }
              //     : { width }
              // }
              // style={qHeight < qWidth ? { height: '100%' } : { width: '100%' }}
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
