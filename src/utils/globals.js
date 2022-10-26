export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const dollarNumberWithCommas = (x) => {
  return '$ ' + x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const makeid = () => {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  text += Math.floor(Math.random() * 10001);

  return text;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
};

export const formatDate = (date) => {
  return [
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
    date.getFullYear(),
  ].join('/');
};

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

export const fractionCalculator = (first, sign, second) => {
  const result = {};
  try {
    if (!first) first = '';
    if (!second) second = '';
    const fraction1 = {},
      fraction2 = {};
    const array1 = first.split(' ');
    let array1_2;
    if (array1.length === 2) {
      fraction1.q = parseInt(array1[0]);

      array1_2 = array1[1].split('/');
      fraction1.r = parseInt(array1_2[0]);
      fraction1.m = parseInt(array1_2[1]);
      if (array1_2.length !== 2) {
        throw 'Typing error in first fraction';
      }
    } else if (array1.length === 1) {
      switch (array1[0].split('/').length) {
        case 2:
          array1_2 = array1[0].split('/');
          fraction1.q = 0;
          fraction1.r = parseInt(array1_2[0]);
          fraction1.m = parseInt(array1_2[1]);
          break;
        case 1:
          fraction1.q = array1[0];
          fraction1.r = 0;
          fraction1.m = 1;
          break;
        default:
          throw 'Typing error in first fraction';
      }
    } else {
      throw 'Typing error in first fraction';
    }
    Object.values(fraction1).forEach((val) => {
      if (isNaN(val)) throw 'Typing error in first fraction';
    });
    fraction1.sign = fraction1.q < 0 ? -1 : 1;
    fraction1.q *= fraction1.q < 0 ? -1 : 1;

    const array2 = second.split(' ');
    let array2_2;
    if (array2.length == 2) {
      fraction2.q = parseInt(array2[0]);

      array2_2 = array2[1].split('/');
      fraction2.r = parseInt(array2_2[0]);
      fraction2.m = parseInt(array2_2[1]);
      if (array2_2.length !== 2) {
        throw 'Typing error in second fraction';
      }
    } else if (array2.length === 1) {
      switch (array2[0].split('/').length) {
        case 2:
          array2_2 = array2[0].split('/');
          fraction2.q = 0;
          fraction2.r = parseInt(array2_2[0]);
          fraction2.m = parseInt(array2_2[1]);
          break;
        case 1:
          fraction2.q = array2[0];
          fraction2.r = 0;
          fraction2.m = 1;
          break;
        default:
          throw 'Typing error in first fraction';
      }
    } else {
      throw 'Typing error in second fraction';
    }
    Object.values(fraction2).forEach((val) => {
      if (isNaN(val)) throw 'Typing error in second fraction';
    });
    fraction2.sign = fraction2.q < 0 ? -1 : 1;
    fraction2.q *= fraction2.q < 0 ? -1 : 1;

    let divisor;
    let top, bottom, resultSign;
    switch (sign) {
      case '-':
        top =
          fraction1.sign *
            (fraction1.q * fraction1.m + fraction1.r) *
            fraction2.m -
          fraction2.sign *
            (fraction2.q * fraction2.m + fraction2.r) *
            fraction1.m;
        bottom = fraction1.m * fraction2.m;
        divisor = gcd(top, bottom);
        top /= divisor;
        bottom /= divisor;
        resultSign = top < 0 ? -1 : 1;
        top *= top < 0 ? -1 : 1;

        break;
      case '+':
        top =
          fraction1.sign *
            (fraction1.q * fraction1.m + fraction1.r) *
            fraction2.m +
          fraction2.sign *
            (fraction2.q * fraction2.m + fraction2.r) *
            fraction1.m;
        bottom = fraction1.m * fraction2.m;
        divisor = gcd(top, bottom);
        top /= divisor;
        bottom /= divisor;
        resultSign = top < 0 ? -1 : 1;
        top *= top < 0 ? -1 : 1;

        break;
      default:
        break;
    }
    result.q = Math.floor((resultSign * top) / bottom);
    result.r = top % bottom;
    result.m = bottom;
    if (result.q) {
      if (result.r) {
        return `${result.q} ${result.r}/${result.m}`;
      } else {
        return `${result.q}`;
      }
    } else {
      if (result.r) {
        return `${result.r}/${result.m}`;
      } else {
        return `0`;
      }
    }
  } catch (error) {}
};
