import React from 'react';
import Input from '../Input';

import './style.css';

const SalesPersonOwner = () => {
  // const [info, setInfo] = useState('Nick Tisdale      (502) 310-9454');
  // const callback = (e) => setInfo(e.target.value);
  return (
    <div class="salespersonandowner">
      <div class="salesperson">
        {/* <input value={info} onChange={callback} /> */}
        {/* <Input value={info} callback={(e) => setInfo(e.target.value)} /> */}
        <Input value={'Nick Tisdale      (502) 310-9454'} />
        <div>Salesperson</div>
      </div>
      <div>
        <div class="signature">Signature</div>
        <div>Home Owner</div>
      </div>
    </div>
  );
};

export default SalesPersonOwner;
