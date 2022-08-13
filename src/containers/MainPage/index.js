import React, { useState } from 'react';
import SignaturePad from 'react-signature-canvas';

import styles from './style.module.css';

const MainPage = () => {
  const [clicked, setClicked] = useState(false);
  const [trimmedDataURL, setTrimmedDataURL] = useState(null);

  let sigPad = {};

  const clear = () => {
    sigPad.clear();
  };
  const trim = () => {
    setTrimmedDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'));
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.sign_button}
        onClick={(e) => setClicked(!clicked)}
      ></button>
      {clicked ? (
        <>
          <div className={styles.sigContainer}>
            <SignaturePad
              canvasProps={{ className: styles.sigPad }}
              ref={(ref) => {
                sigPad = ref;
              }}
            />
          </div>
          <div>
            <button className={styles.buttons} onClick={clear}>
              Clear
            </button>
            <button className={styles.buttons} onClick={trim}>
              Trim
            </button>
          </div>
          {trimmedDataURL ? (
            <img className={styles.sigImage} src={trimmedDataURL} />
          ) : null}
        </>
      ) : null}
    </div>
  );
};

export default MainPage;
