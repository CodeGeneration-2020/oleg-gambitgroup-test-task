export const getParsedFileData = (fileData: string) => {
  const splittedFileData = fileData.split(/\r?\n/);

  const [firstElement] = splittedFileData;

  if (firstElement.includes("-")) {
    const [date, ...inputParams] = splittedFileData;
    const formatted = getConvertedParams(inputParams);

    return {
      date,
      data: formatted,
    };
  } else {
    const formatted = getConvertedParams(splittedFileData);

    return {
      date: "****-**-** **:**",
      data: formatted,
    };
  }
};

export const getConvertedParams = (params: string[]) => {
  return params.reduce((prev, item) => {
    const [key, value] = item.split(":");

    if (!!key && !!value) {
      prev = { ...prev, [Number(key)]: Number(value) };
    }
    return prev;
  }, {});
};
