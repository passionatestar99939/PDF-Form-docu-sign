import React, { useState } from 'react';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
// import pdfMake from 'pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';
// import htmlToPdfmake from 'html-to-pdfmake';

// import html2canvas from 'html2canvas';
// import jsPDF from 'jspdf';

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

const Operation = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleFetch = () => {};

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleSend = () => {
    setOpenModal(false);
  };

  const handleDownload = () => {
    // const input = document.getElementById('page1');
    // html2canvas(input)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF({
    //       orientation: 'p',
    //       unit: 'pt', // points, pixels won't work properly
    //       format: [canvas.width, canvas.height] // set needed dimensions for any element
    //     });
    //     pdf.html(input, {
    //       x: 0,
    //       y: 0,
    //       autoPaging: 'text',
    //       margin: [700, 0, 700, 0],
    //       callback: (doc) => doc.save("download.pdf")});
    //     // pdf.save("download.pdf");
    //   });
    // const doc = new jsPDF();
    // //get table html
    // const input = document.getElementById('page1');
    // //html to pdf format
    // var html = htmlToPdfmake(input.innerHTML);
    // const documentDefinition = { content: html };
    // pdfMake.vfs = pdfFonts.pdfMake.vfs;
    // pdfMake.createPdf(documentDefinition).open();
  };
  return (
    <div className="operation-pad">
      <button className="btn" onClick={() => setOpenModal(true)}>
        Send
      </button>
      <button className="btn" onClick={handleFetch}>
        Fetch
      </button>
      <button className="btn" onClick={handleDownload}>
        Download
      </button>
      <Modal
        isOpen={openModal}
        style={customStyles}
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={200}
      >
        <input />
        <button className="btn" onClick={handleSend}>
          Send
        </button>
        <button className="btn" onClick={handleClose}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Operation;
