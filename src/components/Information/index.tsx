import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";
import { getIntersactionBetweenArrays } from "../../utils/helperFunc";
import { DataOptionType } from "../../types/parser.types";

export const useStyles = makeStyles(() => ({
  wrapper: {
    paddingTop: "24px",
    textTransform: "uppercase",
    fontSize: `${themes.fontSizes.tertiaryQuarter}px`,
  },
  description: {
    textTransform: "uppercase",
    fontSize: `${themes.fontSizes.tertiaryQuarter}px`,
  },
  content: {
    paddingTop: "12px",
    display: "block",
    fontSize: `${themes.fontSizes.basic}px`,
    overflowWrap: "break-word",
    lineHeight: "20px",
    fontWeight: 500,
  },
}));

interface IInformationProps {
  parsedData?: DataOptionType;
}

const Information: FC<IInformationProps> = ({ parsedData }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.description}>status: </Typography>
      <Typography className={classes.content}>
        {getIntersactionBetweenArrays(parsedData)}
      </Typography>
    </Box>
  );
};

export default Information;
