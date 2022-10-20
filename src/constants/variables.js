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
  'BATH',
  'DINING',
  'LIVING',
  'GARAGE',
  'DEN',
  'STUDY',
  'FAMILY',
  'KITCHEN',
  'MBR',
  'BR1',
  'BR2',
  'BR3',
  'BR4',
  'OFFICE',
  'STAIRS',
  'LOFT',
  'ATTIC',
  'BASEMENT',
  'SITTING',
  'PLAYROOM',
  'LAUNDRY',
  'UTILITY',
  'CLOSET',
  'HALLWAY',
  'SUNROOM',
  'PATIO',
  'MUD ROOM',
  'SHED',
  'BARN',
  'PORCH',
];

export const roomStyle = [
  '',
  'DH',
  'DH2',
  'DH3',
  'PW',
  'PW(CAS)',
  'CAS',
  'CAS2',
  'CAS3',
  'AWN',
  'SLD',
  '2LS',
  '3LS',
  'TRN',
  'HOP',
  'SP',
  'HR',
  'SPD',
];

export const energy = [
  '',
  'LOE SZONE',
  'HP-LOE SZONE Elite',
  'LOE 340 SZONE SUNSHILD',
  'TG2 Argon',
  'P&Q STC',
  'IMPACT 366',
];

export const obsc = ['', 'TSO', 'BSO', 'Both'];

export const rain = ['', 'Yes'];

export const temp = ['', 'TSO', 'BSO', 'Both'];

export const sashSplit = ['', 'OR (Oriel)', 'COT (Cottage)'];

export const mulls = {
  normalType: ['FACTORY', 'FIELD'],
  shortType: ['FAC', 'FLD'],
};

export const cutbacks = {
  WOOD: { w: '-3/8', h: '-3/8' },
  DRYWALL: { w: '-1/4', h: '-1/4' },
  PLASTER: { w: '-1/4', h: '-1/4' },
};
