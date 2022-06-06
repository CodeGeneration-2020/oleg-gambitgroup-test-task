import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { DataOptionType } from "../../types/parser.types";
import Information from "../Information";

export const useStyles = makeStyles(() => ({
  wrapper: {
    padding: "8px 16px",
    marginTop: "16px",
  },
  content: {},
}));

interface ITextMenuProps {
  textData: string;
  parsedData: DataOptionType;
  isFullPack?: boolean;
}

const TextMenu: FC<ITextMenuProps> = ({ textData, parsedData, isFullPack }) => {
  const classes = useStyles();

  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.content}>{textData}</Typography>
      {isFullPack ? <Information /> : <Information parsedData={parsedData} />}
    </Box>
  );
};

export default TextMenu;
