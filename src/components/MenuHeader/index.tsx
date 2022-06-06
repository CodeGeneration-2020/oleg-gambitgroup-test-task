import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    border: `1px solid ${themes.colours.borderInk}`,
    borderBottom: "none",
    borderRadius: "4px 4px 0 0",
    overflow: "hidden",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: themes.colours.ink300,
    color: themes.colours.ink100,
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

interface IMenuHeaderProps {
  itemsMenu: string[];
}

const MenuHeader: FC<IMenuHeaderProps> = ({ itemsMenu }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      {itemsMenu.map((item, idx) => (
        <Box className={classes.wrapper} key={idx}>
          <Typography className={classes.item}>{item}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default MenuHeader;
