import React, { FC } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";
import HeaderContent from "../HeaderContent";

export const useStyles = makeStyles(() => ({
  container: {
    height: "100px",
    width: "100%",
    backgroundColor: themes.colours.ink600,
    position: "relative",
    zIndex: 1,
    boxShadow: "0 3px 5px rgba(57, 63, 72, 0.3)",
    "-webkit-box-shadow": "0 3px 5px rgba(57, 63, 72, 0.3)",
    "-moz-box-shadow": "0 3px 5px rgba(57, 63, 72, 0.3)",
    display: "flex",
    justifyContent: "center",
  },
  wrapper: {
    maxWidth: "1440px",
  },
  row: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));

interface IHeaderProps {
  isExistData: boolean;
  date?: string;
  onLogout: () => void;
  onSetAsset: () => void;
}

const Header: FC<IHeaderProps> = ({
  isExistData,
  date,
  onLogout,
  onSetAsset,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} md={8} className={classes.wrapper}>
        <Box className={classes.row}>
          <HeaderContent
            content={date?.substring(0, 17)}
            buttonText="exit"
            action={onLogout}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
