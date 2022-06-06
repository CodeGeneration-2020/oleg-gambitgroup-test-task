import { DataOptionType } from "../types/parser.types";

export const allyProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

export const getIntersactionBetweenArrays = (param?: DataOptionType) => {
  const keysParsedData = param && Object.keys(param as DataOptionType);
  const compareArray = Array.from({ length: 100 }, (v, k) => k + 1);

  if (keysParsedData?.length === 0) {
    return "You have uploaded an invalid text document or uploaded a document with invalid data";
  }

  if (keysParsedData && !!keysParsedData?.length) {
    const difference = compareArray.filter(
      (x) => !keysParsedData.includes(x.toString())
    );
    return `Certain elements are missing (${difference.join(
      ","
    )}), make sure the text file is complete`;
  }

  return "All elements are valid and ready for conversion";
};
