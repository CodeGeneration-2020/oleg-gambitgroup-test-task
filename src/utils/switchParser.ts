import { useMemo } from "react";
import { actionsConversion } from "../consts/variables";
import { DataOptionType } from "../types/parser.types";
import {
  getParsedRegisterIntoInteger,
  getParsedRegisterIntoNumber,
  getParsedRegistersIntoBCD,
  getParsedRegistersIntoFloat,
  getParsedRegistersIntoNumbers,
} from "./conversion";

export const getCalculateValue = (propName: string, deps: DataOptionType) => {
  const withoutSpecialValue = propName.replace(/[^a-zA-Z0-9 ]/g, "");

  return useMemo(() => {
    if (actionsConversion.number.includes(propName)) {
      return getParsedRegisterIntoNumber(deps[Number(withoutSpecialValue)]);
    }

    if (actionsConversion.integers.includes(propName)) {
      return getParsedRegisterIntoInteger(deps[parseInt(withoutSpecialValue)]);
    }

    if (actionsConversion.numbers.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoNumbers(deps[prevNumber], deps[nextNumber]);
    }

    if (actionsConversion.BCDs.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoBCD(deps[prevNumber], deps[nextNumber]);
    }

    if (actionsConversion.floats.includes(propName)) {
      const middle = withoutSpecialValue.length / 2;
      const prevNumber = parseInt(withoutSpecialValue.slice(0, middle));
      const nextNumber = parseInt(withoutSpecialValue.slice(middle));

      return getParsedRegistersIntoFloat(deps[prevNumber], deps[nextNumber]);
    } else {
      return "Already is doesn't support";
    }
  }, [propName]);
};
