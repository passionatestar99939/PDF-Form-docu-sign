export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const dollarNumberWithCommas = (x) => {
  return "$ " + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const makeid = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  text += Math.floor(Math.random() * 10001);

  return text;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

export const formatDate = (date) => {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join("/");
};
