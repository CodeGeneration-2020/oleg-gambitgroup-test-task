import { bin, getSigned, hex2bin, parseFloat } from "./calculation";

export const getParsedRegistersIntoFloat = (
  register1: number,
  register2: number
) => {
  const hex_1 = register2.toString(16);
  const hex_2 = register1.toString(16);
  const the_hex = "0x" + hex_1 + hex_2;

  return parseFloat(the_hex);
};

export const getParsedRegistersIntoNumbers = (
  register1: number,
  register2: number
) => {
  const full_hex_1 = Number(register2).toString(16);
  const full_hex_2 = Number(register1).toString(16);
  const hex_1 = Number(register2).toString(16).slice(2);
  const hex_2 = Number(register1).toString(16).slice(2);
  const the_hex = hex_1 + hex_2;
  const full_the_hex = full_hex_1 + full_hex_2;

  return the_hex.length ? getSigned(hex2bin(the_hex)) : Number(full_the_hex);
};

export const getParsedRegisterIntoNumber = (register: number) => {
  const binString = bin(register) as string;
  return binString.length > 1 ? parseInt(binString.slice(4), 2) : 0;
};

export const getParsedRegisterIntoInteger = (register: number) => {
  const binString = bin(register) as string;
  return parseInt(binString, 2);
};

export const getParsedRegistersIntoBCD = (
  register1: number,
  register2: number
) => {
  const hex_1 = register2.toString(16);
  const hex_2 = register1.toString(16);
  const the_hex = hex_1 + hex_2;

  return parseInt(the_hex, 16);
};
