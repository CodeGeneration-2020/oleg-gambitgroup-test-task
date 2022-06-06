export const bin = (s: number): number | string => {
  const str = JSON.stringify(s);
  return s <= 1 ? str : bin(s >> 1) + JSON.stringify(s & 1);
};

export const getSigned = (binary: string) => {
  return (
    parseInt(
      binary.length >= 8 && binary[0] === "1"
        ? binary.padStart(32, "1")
        : binary.padStart(32, "0"),
      2
    ) >> 0
  );
};

export const hex2bin = (hex: string) => {
  return ("00000000" + parseInt(hex, 16).toString(2)).substr(-8);
};

export const parseFloat = (str: string) => {
  let float = 0;
  let sign = null;
  let mantissa = null;
  let exp = null;
  let int = 0;
  let multi = 1;

  if (/^0x/.exec(str)) {
    int = parseInt(str, 16);
  } else {
    for (let i = str.length - 1; i >= 0; i -= 1) {
      if (str.charCodeAt(i) > 255) {
        return false;
      }
      int += str.charCodeAt(i) * multi;
      multi *= 256;
    }
  }
  sign = int >>> 31 ? -1 : 1;
  exp = ((int >>> 23) & 0xff) - 127;
  mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
  for (let i = 0; i < mantissa.length; i += 1) {
    float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
    exp--;
  }
  return float * sign;
};
