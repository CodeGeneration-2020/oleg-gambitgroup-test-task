import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { FC, ReactNode } from "react";
import { themes } from "../../styles/theme";

export const useStyles = makeStyles(() => ({
  containter: {
    marginTop: "24px",

    "&:first-child": {
      marginTop: "0",
    },
  },
  title: {
    fontSize: `${themes.fontSizes.tertiaryMiddle}px`,
    color: themes.colours.blue100,
    marginBottom: "8px",
  },
  button: {
    width: "100%",
    fontSize: `${themes.fontSizes.secondary}px`,
    padding: "8px 64px",
    borderRadius: "4px",
    border: `1px solid ${themes.colours.blue200}`,
    backgroundColor: themes.colours.blue200,
    color: themes.colours.white,
    textTransform: "uppercase",
    fontWeight: 600,
    cursor: "pointer",
    transition: "250ms ease-in",
  },
}));

interface IActionLogInProps {
  children?: ReactNode;
  titleText: string;
  action: () => void;
}

const ActionLogIn: FC<IActionLogInProps> = ({
  children,
  action,
  titleText,
}) => {
  const classes = useStyles();

  return (
    <Box className={classes.containter}>
      <Typography className={classes.title}>{titleText}</Typography>
      <Button variant="contained" onClick={action} className={classes.button}>
        {children}
      </Button>
    </Box>
  );
};

export default ActionLogIn;
