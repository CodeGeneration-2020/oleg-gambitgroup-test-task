import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";

export const useStyles = makeStyles((theme) => ({
  container: {
    border: `1px solid ${themes.colours.borderInk}`,
    borderBottom: "none",
    display: "flex",

    "&:nth-child(odd)": {
      backgroundColor: themes.colours.ink600,
    },

    "&:last-child": {
      borderBottom: `1px solid ${themes.colours.borderInk}`,
    },

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    borderRight: `1px solid ${themes.colours.borderInk}`,

    "&:last-child": {
      borderRight: "none",
    },

    [theme.breakpoints.down("md")]: {
      border: "none",

      "&:first-child": {
        borderBottom: `1px solid ${themes.colours.borderInk}`,
      },
    },
  },
  item: {
    fontSize: `${themes.fontSizes.tertiaryQuarter}px`,
    color: themes.colours.blue200,
    padding: "8px 16px",
  },
}));

interface IMenuItemProps {
  asset: (string | number)[];
}

const MenuItem: FC<IMenuItemProps> = ({ asset }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {asset.map((item, idx) => (
        <Box className={classes.wrapper} key={idx}>
          <Typography className={classes.item}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MenuItem;
