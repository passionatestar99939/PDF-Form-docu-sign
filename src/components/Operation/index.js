import React, { useState, useEffect } from 'react';
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

const pdf_paths = {
  pdf1: {
    path: BASE_URL + '/pdfs/WW-4000-Double-Hung-Windows.pdf',
    title: 'WW - 4000 Series Double Hung Windows (PDF)',
    send: false,
  },
  pdf2: {
    path: BASE_URL + '/pdfs/Patio Door Order Form.pdf',
    title: 'WW - 4000 Series Patior Doors (PDF)',
    send: false,
  },
  pdf3: {
    path: BASE_URL + '/pdfs/WW-Casements-and-Awnings.pdf',
    title: 'WW - 4000 Series Casement/Awning Windows (PDF)',
    send: false,
  },
  pdf4: {
    path: BASE_URL + '/pdfs/WW-Basement-Hopper.pdf',
    title: 'WW - 4000 Series Blinds-Between-The-Glass (PDF)',
    send: false,
  },
  pdf5: {
    path: BASE_URL + '/pdfs/WW-BAY-AND-BOW.pdf',
    title: 'WW - Peace and Quiet Glass STC 33 (PDF)',
    send: false,
  },
  pdf6: {
    path: BASE_URL + '/pdfs/WW-Repair-Labor-Guarantee.pdf',
    title: 'WW - Repair Labor Guarentee',
    send: false,
  },
};

const Operation = (props) => {
  const [pdfSend, setPdfSend] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [signature, setSignature] = useState(
    '<b>Nick Tisdale<br />Window World</b><br />ww@nicktisdale.com<br />(502) 310-9454'
  );
  const [pdfPath, setPdfPath] = useState({ ...pdf_paths });

  const email = useSelector((state) => state.salesman.data.email);
  const viewMode = useSelector((state) => state.option.data.viewMode);
  const linkId = useSelector((state) => state.option.data.linkId);
  const status = useSelector((state) => state.option.data.loading);
  const signStatus = useSelector((state) => state.option.data.signStatus);
  const customerName = useSelector((state) => state.contact.data.customer);
  const address = useSelector((state) => state.contact.data.installAddr);
  const phoneNumber = useSelector((state) => state.contact.data.phone1);
  const windowWorldData = useSelector((state) => state.windowworld.data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Number(windowWorldData.windowWorldInput1) > 0)
      pdf_paths.pdf1.send = true;
    else pdf_paths.pdf1.send = false;
    if (Number(windowWorldData.windowWorldInput1) > 0)
      pdf_paths.pdf2.send = true;
    else pdf_paths.pdf2.send = false;
    if (
      Number(windowWorldData.windowWorldInput12) > 0 ||
      Number(windowWorldData.windowWorldInput13) > 0 ||
      Number(windowWorldData.windowWorldInput14) > 0 ||
      Number(windowWorldData.windowWorldInput15) > 0
    )
      pdf_paths.pdf3.send = true;
    else pdf_paths.pdf3.send = false;
    if (Number(windowWorldData.windowWorldInput1) > 0)
      pdf_paths.pdf4.send = true;
    else pdf_paths.pdf4.send = false;
    if (Number(windowWorldData.windowWorldInput1) > 0)
      pdf_paths.pdf5.send = true;
    else pdf_paths.pdf5.send = false;
    if (Number(windowWorldData.windowWorldInput1) > 0)
      pdf_paths.pdf6.send = true;
    else pdf_paths.pdf6.send = false;
  }, [
    windowWorldData.windowWorldInput1,
    windowWorldData.windowWorldInput12,
    windowWorldData.windowWorldInput13,
    windowWorldData.windowWorldInput14,
    windowWorldData.windowWorldInput15,
  ]);

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
    Object.keys(pdf_paths).forEach((value) => {
      let attach_path = BASE_URL + '/images/attach.png';
      let pdf_image_path = BASE_URL + '/images/pdf-attach.png';
      if (pdf_paths[value].send) {
        pdf_body +=
          '<div style="display: flex; align-items: center;"><img alt="attach" src="' +
          attach_path +
          '" /><a href="' +
          pdf_paths[value].path +
          '">' +
          pdf_paths[value].title +
          '</a><img alt="pdf" width="20px" src="' +
          pdf_image_path +
          '" /></div>';
      }
    });

    // console.log(body + pdf_body);

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
    console.log({ isChecked });
    dispatch(updateSignStatus(isChecked));
  };

  const handleDownload = () => {
    let data = store.getState();
    console.log(data);
    dispatch(requestDownloadAsync({ contractInfo: data }));
  };

  const handlePdfSend = (e) => {
    pdf_paths[e.target.id]['send'] = e.target.checked;
    // setPdfPath({ ...pdfPath[e.target.id], send: e.target.checked });
    console.log(pdf_paths);
  };

  console.log('send', pdfPath.pdf1.send);
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
                <div className="wrapper">
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf1"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf1.send}
                    />
                    <label for="pdf1">
                      WW - 4000 Series Double Hung Windows (PDF)
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf2"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf2.send}
                    />
                    <label for="pdf2">
                      WW - 4000 Series Patior Doors (PDF)
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
                </div>
                <div className="wrapper">
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf3"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf3.send}
                    />
                    <label for="pdf3">
                      WW - 4000 Series Casement/Awning Windows (PDF)
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf4"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf4.send}
                    />
                    <label for="pdf4">
                      WW - 4000 Series Blinds-Between-The-Glass (PDF)
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
                </div>
                <div className="wrapper">
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf5"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf5.send}
                    />
                    <label for="pdf5">
                      WW - Peace and Quiet Glass STC 33 (PDF)
                    </label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
                  <div className="width-50 vertical-center">
                    <input
                      type="checkbox"
                      id="pdf6"
                      onClick={(e) => handlePdfSend(e)}
                      defaultChecked={pdf_paths.pdf6.send}
                    />
                    <label for="pdf6">WW - Repair Labor Guarentee</label>
                    &nbsp;&nbsp;&nbsp;
                    <img alt="pdf" src="/images/pdf-attach.png" width={30} />
                  </div>
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
                  <label for="signature" style={{ margin: '4px' }}>
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
