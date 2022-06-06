import React, { FC } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Bar } from "react-chartjs-2";
import { arrOptions, options } from "../../consts/variables";
import { themes } from "../../styles/theme";
import { IParsedData } from "../../types/parser.types";
import { getCalculateValue } from "../../utils/switchParser";

export const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    padding: "8px 16px",
  },
}));

interface IChartProps {
  parsedData: IParsedData;
}

const Chart: FC<IChartProps> = ({ parsedData }) => {
  const classes = useStyles();
  const calculationParams = arrOptions.map((item) => item.split(" ")[0]);
  const labels = arrOptions.map((item) => item.split(" ").slice(1).join(" "));

  const chartValues = arrOptions.map((option, idx) =>
    Number(getCalculateValue(calculationParams[idx], parsedData.data))
  );

  const data = {
    labels,
    datasets: [
      {
        label: "tuf-2000m",
        data: chartValues,
        backgroundColor: themes.colours.blue200,
      },
    ],
  };

  return (
    <Box className={classes.container}>
      <Bar options={options} data={data} />
    </Box>
  );
};

export default Chart;
