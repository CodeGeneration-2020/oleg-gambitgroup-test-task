import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC } from "react";
import { themes } from "../../styles/theme";
import { DataOptionType } from "../../types/parser.types";
import MenuHeader from "../MenuHeader";
import MenuItem from "../MenuItem";

export const useStyles = makeStyles(() => ({
  wrapper: {
    width: "100%",
    padding: "8px 16px",
    marginTop: "16px",
  },
  statusDescription: {
    textTransform: `uppercase`,
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

interface IGeneralMenuProps {
  parsedData: DataOptionType;
}

const GeneralMenu: FC<IGeneralMenuProps> = ({ parsedData }) => {
  const classes = useStyles();
  const arrayAssets = Object.entries(parsedData);

  return (
    <Box className={classes.wrapper}>
      {arrayAssets.length ? (
        <>
          <MenuHeader itemsMenu={["Register", "Values"]} />
          {arrayAssets.map(([key, value], idx) => (
            <MenuItem key={idx} asset={[key, value.toString()]} />
          ))}
        </>
      ) : (
        <>
          <Typography className={classes.statusDescription}>
            status:{" "}
          </Typography>
          <Typography className={classes.content}>
            Alas, you have not entered any data
          </Typography>
        </>
      )}
    </Box>
  );
};

export default GeneralMenu;
