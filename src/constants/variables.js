export const initDataOfMeasureSheet = {
  no: 0,
  room: '',
  style: '',
  roWidth: '',
  roHeight: '',
  orderWidth: '',
  orderHeight: '',
  grids: '',
  intColor: '',
  extColor: '',
  foam: false,
  temp: false,
  obsc: false,
  energy: '',
  mullCuts: '',
  notes: '',
  categoryNum: -1,
};

export const initDataOfWindowOrder = {
  qty: '',
  type: '',
  series: '',
  foam: '',
  nailfin: false,
  szWidth: '',
  szX: 'X',
  szHeight: '',
  sashSplit: '',
  intColor: '',
  extColor: '',
  grids: false,
  pattern: '',
  blinds: false,
  energy: '',
  obsc: '',
  temp: '',
  casementsL: false,
  casementsR: false,
  casementsPW: false,
  mulls: '',
  comment: '',
  categoryNum: -1,
};

export const initDataOfCommisionForm = {
  store: '',
  data: '',
  salesConsultant: '',
  sales: '',
  customerName: '',
  comm: '',
  wwOrder: '',
  calculation: '',
  contractPrice: '',
  bonus: '',
};

export const typeOfCheckBox = {
  WindowTable: 'WindowTable',
  PatioDoorOrder: 'PatioDoorOrder',
};

export const interiorColor = [
  '',
  'White - Extruded',
  'Almond - Extruded',
  'Clay - Extruded',
  'Hillside Oak - Laminated',
  'Natural Oak - Laminated',
  'Colonial Cherry - Laminated',
  'Black Interior - Painted',
];

export const exteriorColor = [
  '',
  'White - Extruded',
  'Almond - Extruded',
  'Clay - Extruded',
  'Almond - Painted',
  'Clay - Painted',
  'Cocoa - Painted',
  'Black - Painted',
  'Cream - Painted',
  'Silver - Painted',
  'Green - Painted',
  'Bronze - Painted',
];

export const roomItems = [
  '',
  'BEDROOM',
  'LIVING ROOM',
  'GARAGE',
  'KITCHEN',
  'DINING',
  'BATH',
];

export const roomStyle = ['', 'DH', '3LS', 'SPD'];

export const energy = [
  '',
  'LOE SZONE',
  'HP-LOE SZONE Elite',
  'LOE 340 SZONE SUNSHILD',
  'TG2 Argon',
  'P&Q STC',
  'IMPACT 366',
];

export const obsc = [
  '',
  'TSO (Top Sash Only)',
  'BSO (Bottom Sash Only)',
  'Both',
];

export const rain = ['', 'Yes'];

export const temp = [
  '',
  'TSO (Top Sash Only)',
  'BSO (Bottom Sash Only)',
  'Both',
];

export const sashSplit = ['', 'OR (Oriel)', 'COT (Cottage)'];

// export const cutbacks = {
//   WOOD: '(-3/8" W)',
//   DRYWALL: '(-1/2" W) x (-1/2" H)',
//   PLASTER: '(-1/2" W) x (-1/2" H)',
// };

export const cutbacks = {
  WOOD: { w: '-3/8' },
  DRYWALL: { w: '-1/2', h: '-1/2' },
  PLASTER: { w: '-1/2', h: '-1/2' },
};
