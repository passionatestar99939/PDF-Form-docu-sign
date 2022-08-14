import React from 'react';

import './style.css';

const Contact = () => {
  return (
    <div>
      <div>
        <div>
          <spin>Customer: </spin>
          <input type='text' className='no-outline' />
        </div>
        <div>
          <spin>Phone</spin>
          <input type='text' className='no-outline' />
        </div>
      </div>
      <div>
        <div>
          <spin>Install Address: </spin>
          <input type='text' className='no-outline' />
        </div>
        <div>
          <spin>Phone</spin>
          <input type='text' className='no-outline' />
        </div>
      </div>
      <div>
        <spin>Bill Address: </spin>
        <input type='text' className='no-outline width-100' />
      </div>
    </div>
  );
};

export default Contact;
