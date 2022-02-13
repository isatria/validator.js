import assertString from './util/assertString';
import isInt from './isInt';

const validators = {
  IDN: (str) => {
    assertString(str);

    const numbers = str.replace(/\D/g, '').split('').map(n => parseInt(n, 10));

    if (numbers.length !== 16) {
      return false;
    }

    const T2 = [1, 2];
    const T3 = [1, 3];
    const T4 = [1, 4];
    const T5 = [1, 5];
    const T6 = [1, 6];
    const T7 = [1, 7];
    const T8 = [1, 8];
    const T9 = [1, 9];
    const T10 = [1, 10];
    const T11 = [1, 11];
    const T12 = [1, 12];
    const T13 = [1, 13];
    const T14 = [1, 14];
    const T15 = [1, 15];
    const T16 = [1, 16];
    const T17 = [1, 17];
    const T18 = [1, 18];
    const T19 = [1, 19];
    const T20 = [1, 20];
    const T21 = [1, 21];
    const T23 = [1, 23];
    const T24 = [1, 24];
    const T26 = [1, 26];
    const T27 = [1, 27];
    const T28 = [1, 28];
    const T30 = [1, 30];
    const T31 = [1, 31];
    const T32 = [1, 32];
    const T35 = [1, 35];
    const T39 = [1, 39];
    const T40 = [1, 40];
    const T42 = [1, 42];
    const T47 = [1, 47];

    const numBarier = {
      11: [
        [1, 18, null, [
          T18, T16, T24, [1, 21, [4, 5, 6, 9, 14, 15, 16]], T12, T23,
          [3, 31, [10, 20, 23, 26, 28, 30]], T27, T10, [1, 16, [3, 5, 6, 7, 8]],
          T17, T9, T11, T9, T10, T12, T10, T8,
        ]],
        [1, 5, null, [T9, T2, T4, T5, T5]],
      ],
      12: [
        [1, 25, null, [T20, T15,
          [1, 32, [8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28]],
          [5, 35, [
            7, 8, 9, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 25, 26, 30, 31, 32, 33, 34,
          ]],
          T23, T17, [1, 33, [10, 11, 12, 13, 14, 15, 16, 17, 18, 29, 30]], T32,
          [8, 32], [1, 20, [3, 4, 5, 6, 10, 11, 12, 13, 15, 16, 17]], T15,
          [1, 24, [11, 12, 13, 14, 15, 16, 17, 18]], T23, T35, T8,
          T10, T9, T17, T12, T12, T12, T5, T8, T11, T8,
        ]],
        [1, 8, null, [T21, T8, T4, T6, T5, T5, T6, T6]],
      ],
      13: [
        [1, 12, null, [
          T15, [3, 19, [14, 15, 16]], [3, 10], T14, T17, T16, T13,
          [4, 19, [6, 9, 10, 11]], T10, T11, T7, T11,
        ]],
        [1, 7, null, [T11, T2, T4, T2, T3, T5, T4]],
      ],
      14: [
        [1, 10, null, [T21, T14, [1, 16, [4, 5, 6, 7, 8]], T20, T12, T16, T18, T14, T15, T9]],
        [1, 2, null, [T12, T7]],
      ],
      15: [
        [1, 9, null, [[1, 21, [3, 10, 12, 13, 14]], T24, T10, T8, T11, T13, T11, T17, T12]],
        [1, 2, null, [T11, T8]],
      ],
      16: [
        [1, 13, null, [
          [7, 32, [10, 11, 12, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27]], [2, 24, [6, 7, 9, 10, 16]],
          [1, 27, [5, 12, 13, 18, 20]], [1, 31, [2, 3, 4, 5, 11, 13, 14]],
          [1, 21, [4, 5, 6, 7, 15, 16, 17]], T15, T21, T20, T19, T16, T10,
          T5, T7,
        ]],
        [1, 4, null, [T18, T5, T8, T6]],
      ],
      17: [
        [1, 9, null, [
          T11, [6, 24, [12, 13, 14, 15]], [1, 25, [2, 3, 4, 5, 17, 18]], T15, T14,
          T15, T12, T8, T11,
        ]],
        [1, 1, null, [T9]],
      ],
      18: [
        [1, 13, null, [
          [4, 24, [11, 12, 19, 20]], T28, T23, [4, 23, [12, 13, 14, 16, 17]],
          [2, 30, [3, 4, 5, 7, 9, 10, 14, 15, 16, 17, 19, 21, 24, 28]],
          [1, 28, [5, 6, 7, 8, 10, 14, 22, 23]], T24, T14, T11, T9, T7,
          T9, T11,
        ]],
        [1, 2, null, [T20, T5]],
      ],
      19: [
        [1, 6, null, [T8, T5, T8, T6, T6, T7]],
        [1, 1, null, [T7]],
      ],
      21: [
        [1, 5, null, [[4, 15, [5, 11]], T12, [4, 22, [12, 13, 14, 17]], T13, T9]],
        [1, 2, null, [T12, T4]],
      ],
      31: [
        [1, 1, null, [T2]],
        [1, 5, null, [T8, T6, T8, T10, T10]],
      ],
      32: [
        [1, 18, null, [
          T40, T47, T32, [5, 46, [18, 19, 20, 21, 22, 23, 24, 41, 42, 43, 45]], T42, T39,
          [1, 37, [20, 21, 22, 23, 24, 25, 26, 27, 28, 36]], T32, T40, T26, T26, T31, T30, T17, T30,
          T23, T16, T10,
        ]],
        [1, 9, null, [T6, T7, T30, T5, T12, T11, T3, T10, T4]],
      ],
      33: [
        [],
        [],
      ],
      34: [
        [],
        [],
      ],
      35: [
        [],
        [],
      ],
      36: [
        [],
        [],
      ],
      51: [
        [],
        [],
      ],
      52: [
        [],
        [],
      ],
      53: [
        [],
        [],
      ],
      61: [
        [],
        [],
      ],
      62: [
        [],
        [],
      ],
      63: [
        [],
        [],
      ],
      64: [
        [],
        [],
      ],
      65: [
        [],
        [],
      ],
      71: [
        [],
        [],
      ],
      72: [
        [],
        [],
      ],
      73: [
        [],
        [],
      ],
      74: [
        [],
        [],
      ],
      75: [
        [],
        [],
      ],
      76: [
        [],
        [],
      ],
      81: [
        [],
        [],
      ],
      82: [
        [],
        [],
      ],
      91: [
        [],
        [],
      ],
      92: [
        [],
        [],
      ],
    };

    const proviceCode = parseInt(`${numbers[0]}${numbers[1]}`, 10);
    const numBariers = numBarier[proviceCode];
    if (!numBariers) {
      return false;
    }

    const regionCode = parseInt(`${numbers[2]}${numbers[3]}`, 10);

    let isCity = 0;
    let normalRegionCode = regionCode;

    if (regionCode > 70) {
      isCity = 1;
      normalRegionCode = regionCode - 70;
    }

    const [minRegCode, maxRegCode, excldReg, distBarier] = numBariers[isCity];

    let isValidRegion = minRegCode <= normalRegionCode && normalRegionCode <= maxRegCode;
    if (Array.isArray(excldReg)) {
      isValidRegion = !excldReg.includes(regionCode);
    }

    if (!isValidRegion) {
      return false;
    }

    const [minDistCode, maxDistCode, excldDist] = distBarier[isCity];

    const distCode = parseInt(`${numbers[4]}${numbers[5]}`, 10);

    let isValidDist = minDistCode <= distCode && distCode <= maxDistCode;
    if (Array.isArray(excldDist)) {
      isValidDist = !excldReg.includes(distCode);
    }

    if (!isValidDist) {
      return false;
    }

    return true;
  },
  PL: (str) => {
    assertString(str);

    const weightOfDigits = {
      1: 1,
      2: 3,
      3: 7,
      4: 9,
      5: 1,
      6: 3,
      7: 7,
      8: 9,
      9: 1,
      10: 3,
      11: 0,
    };

    if (str != null && str.length === 11 && isInt(str, { allow_leading_zeroes: true })) {
      const digits = str.split('').slice(0, -1);
      const sum = digits.reduce((acc, digit, index) =>
        acc + (Number(digit) * weightOfDigits[index + 1]), 0);

      const modulo = sum % 10;
      const lastDigit = Number(str.charAt(str.length - 1));

      if ((modulo === 0 && lastDigit === 0) || lastDigit === 10 - modulo) {
        return true;
      }
    }

    return false;
  },
  ES: (str) => {
    assertString(str);

    const DNI = /^[0-9X-Z][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    const charsValue = {
      X: 0,
      Y: 1,
      Z: 2,
    };

    const controlDigits = [
      'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B',
      'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E',
    ];

    // sanitize user input
    const sanitized = str.trim().toUpperCase();

    // validate the data structure
    if (!DNI.test(sanitized)) {
      return false;
    }

    // validate the control digit
    const number = sanitized.slice(0, -1).replace(/[X,Y,Z]/g, char => charsValue[char]);

    return sanitized.endsWith(controlDigits[number % 23]);
  },
  FI: (str) => {
    // https://dvv.fi/en/personal-identity-code#:~:text=control%20character%20for%20a-,personal,-identity%20code%20calculated
    assertString(str);

    if (str.length !== 11) {
      return false;
    }

    if (!str.match(/^\d{6}[\-A\+]\d{3}[0-9ABCDEFHJKLMNPRSTUVWXY]{1}$/)) {
      return false;
    }

    const checkDigits = '0123456789ABCDEFHJKLMNPRSTUVWXY';

    const idAsNumber = (parseInt(str.slice(0, 6), 10) * 1000) + parseInt(str.slice(7, 10), 10);
    const remainder = idAsNumber % 31;
    const checkDigit = checkDigits[remainder];

    return checkDigit === str.slice(10, 11);
  },
  IN: (str) => {
    const DNI = /^[1-9]\d{3}\s?\d{4}\s?\d{4}$/;

    // multiplication table
    const d = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
      [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
      [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
      [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
      [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
      [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
      [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
      [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
      [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
    ];

    // permutation table
    const p = [
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
      [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
      [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
      [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
      [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
      [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
      [7, 0, 4, 6, 9, 1, 3, 2, 5, 8],
    ];

    // sanitize user input
    const sanitized = str.trim();

    // validate the data structure
    if (!DNI.test(sanitized)) {
      return false;
    }
    let c = 0;
    let invertedArray = sanitized.replace(/\s/g, '').split('').map(Number).reverse();

    invertedArray.forEach((val, i) => {
      c = d[c][p[(i % 8)][val]];
    });

    return c === 0;
  },
  IR: (str) => {
    if (!str.match(/^\d{10}$/)) return false;
    str = (`0000${str}`).substr(str.length - 6);

    if (parseInt(str.substr(3, 6), 10) === 0) return false;

    const lastNumber = parseInt(str.substr(9, 1), 10);
    let sum = 0;

    for (let i = 0; i < 9; i++) {
      sum += parseInt(str.substr(i, 1), 10) * (10 - i);
    }

    sum %= 11;

    return (
      (sum < 2 && lastNumber === sum) || (sum >= 2 && lastNumber === 11 - sum)
    );
  },
  IT: function IT(str) {
    if (str.length !== 9) return false;
    if (str === 'CA00000AA') return false; // https://it.wikipedia.org/wiki/Carta_d%27identit%C3%A0_elettronica_italiana
    return str.search(/C[A-Z]\d{5}[A-Z]{2}/is) > -1;
  },
  NO: (str) => {
    const sanitized = str.trim();
    if (isNaN(Number(sanitized))) return false;
    if (sanitized.length !== 11) return false;
    if (sanitized === '00000000000') return false;

    // https://no.wikipedia.org/wiki/F%C3%B8dselsnummer
    const f = sanitized.split('').map(Number);
    let k1 = (11 - (((3 * f[0]) + (7 * f[1]) + (6 * f[2])
      + (1 * f[3]) + (8 * f[4]) + (9 * f[5]) + (4 * f[6])
      + (5 * f[7]) + (2 * f[8])) % 11)) % 11;
    let k2 = (11 - (((5 * f[0]) + (4 * f[1]) + (3 * f[2])
      + (2 * f[3]) + (7 * f[4]) + (6 * f[5]) + (5 * f[6])
      + (4 * f[7]) + (3 * f[8]) + (2 * k1)) % 11)) % 11;

    if (k1 !== f[9] || k2 !== f[10]) return false;
    return true;
  },
  TH: (str) => {
    if (!str.match(/^[1-8]\d{12}$/)) return false;

    // validate check digit
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += parseInt(str[i], 10) * (13 - i);
    }
    return str[12] === ((11 - (sum % 11)) % 10).toString();
  },
  LK: (str) => {
    const old_nic = /^[1-9]\d{8}[vx]$/i;
    const new_nic = /^[1-9]\d{11}$/i;

    if (str.length === 10 && old_nic.test(str)) return true;
    else if (str.length === 12 && new_nic.test(str)) return true;
    return false;
  },
  'he-IL': (str) => {
    const DNI = /^\d{9}$/;

    // sanitize user input
    const sanitized = str.trim();

    // validate the data structure
    if (!DNI.test(sanitized)) {
      return false;
    }

    const id = sanitized;

    let sum = 0,
      incNum;
    for (let i = 0; i < id.length; i++) {
      incNum = Number(id[i]) * ((i % 2) + 1); // Multiply number by 1 or 2
      sum += incNum > 9 ? incNum - 9 : incNum; // Sum the digits up and add to total
    }
    return sum % 10 === 0;
  },
  'ar-LY': (str) => {
    // Libya National Identity Number NIN is 12 digits, the first digit is either 1 or 2
    const NIN = /^(1|2)\d{11}$/;

    // sanitize user input
    const sanitized = str.trim();

    // validate the data structure
    if (!NIN.test(sanitized)) {
      return false;
    }
    return true;
  },
  'ar-TN': (str) => {
    const DNI = /^\d{8}$/;

    // sanitize user input
    const sanitized = str.trim();

    // validate the data structure
    if (!DNI.test(sanitized)) {
      return false;
    }
    return true;
  },
  'zh-CN': (str) => {
    const provincesAndCities = [
      '11', // 北京
      '12', // 天津
      '13', // 河北
      '14', // 山西
      '15', // 内蒙古
      '21', // 辽宁
      '22', // 吉林
      '23', // 黑龙江
      '31', // 上海
      '32', // 江苏
      '33', // 浙江
      '34', // 安徽
      '35', // 福建
      '36', // 江西
      '37', // 山东
      '41', // 河南
      '42', // 湖北
      '43', // 湖南
      '44', // 广东
      '45', // 广西
      '46', // 海南
      '50', // 重庆
      '51', // 四川
      '52', // 贵州
      '53', // 云南
      '54', // 西藏
      '61', // 陕西
      '62', // 甘肃
      '63', // 青海
      '64', // 宁夏
      '65', // 新疆
      '71', // 台湾
      '81', // 香港
      '82', // 澳门
      '91', // 国外
    ];

    const powers = ['7', '9', '10', '5', '8', '4', '2', '1', '6', '3', '7', '9', '10', '5', '8', '4', '2'];

    const parityBit = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    const checkAddressCode = addressCode => provincesAndCities.includes(addressCode);

    const checkBirthDayCode = (birDayCode) => {
      const yyyy = parseInt(birDayCode.substring(0, 4), 10);
      const mm = parseInt(birDayCode.substring(4, 6), 10);
      const dd = parseInt(birDayCode.substring(6), 10);
      const xdata = new Date(yyyy, mm - 1, dd);
      if (xdata > new Date()) {
        return false;
        // eslint-disable-next-line max-len
      } else if ((xdata.getFullYear() === yyyy) && (xdata.getMonth() === mm - 1) && (xdata.getDate() === dd)) {
        return true;
      }
      return false;
    };

    const getParityBit = (idCardNo) => {
      let id17 = idCardNo.substring(0, 17);

      let power = 0;
      for (let i = 0; i < 17; i++) {
        power += parseInt(id17.charAt(i), 10) * parseInt(powers[i], 10);
      }

      let mod = power % 11;
      return parityBit[mod];
    };

    const checkParityBit = idCardNo => getParityBit(idCardNo) === idCardNo.charAt(17).toUpperCase();


    const check15IdCardNo = (idCardNo) => {
      let check = /^[1-9]\d{7}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}$/.test(idCardNo);
      if (!check) return false;
      let addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      let birDayCode = `19${idCardNo.substring(6, 12)}`;
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return true;
    };

    const check18IdCardNo = (idCardNo) => {
      let check = /^[1-9]\d{5}[1-9]\d{3}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{3}(\d|x|X)$/.test(idCardNo);
      if (!check) return false;
      let addressCode = idCardNo.substring(0, 2);
      check = checkAddressCode(addressCode);
      if (!check) return false;
      let birDayCode = idCardNo.substring(6, 14);
      check = checkBirthDayCode(birDayCode);
      if (!check) return false;
      return checkParityBit(idCardNo);
    };

    const checkIdCardNo = (idCardNo) => {
      let check = /^\d{15}|(\d{17}(\d|x|X))$/.test(idCardNo);
      if (!check) return false;
      if (idCardNo.length === 15) {
        return check15IdCardNo(idCardNo);
      }
      return check18IdCardNo(idCardNo);
    };
    return checkIdCardNo(str);
  },
  'zh-TW': (str) => {
    const ALPHABET_CODES = {
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      G: 16,
      H: 17,
      I: 34,
      J: 18,
      K: 19,
      L: 20,
      M: 21,
      N: 22,
      O: 35,
      P: 23,
      Q: 24,
      R: 25,
      S: 26,
      T: 27,
      U: 28,
      V: 29,
      W: 32,
      X: 30,
      Y: 31,
      Z: 33,
    };

    const sanitized = str.trim().toUpperCase();

    if (!/^[A-Z][0-9]{9}$/.test(sanitized)) return false;

    return Array.from(sanitized).reduce((sum, number, index) => {
      if (index === 0) {
        const code = ALPHABET_CODES[number];

        return ((code % 10) * 9) + Math.floor(code / 10);
      }

      if (index === 9) {
        return ((10 - (sum % 10)) - Number(number)) % 10 === 0;
      }

      return sum + (Number(number) * (9 - index));
    }, 0);
  },
};

export default function isIdentityCard(str, locale) {
  assertString(str);
  if (locale in validators) {
    return validators[locale](str);
  } else if (locale === 'any') {
    for (const key in validators) {
      // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
      // istanbul ignore else
      if (validators.hasOwnProperty(key)) {
        const validator = validators[key];
        if (validator(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error(`Invalid locale '${locale}'`);
}
