import React, { ChangeEvent, FC, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ActionLogIn from "../../components/ActionLogIn";
import { themes } from "../../styles/theme";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  wrapper: {
    border: `1px solid ${themes.colours.ink100}`,
    backgroundColor: themes.colours.ink700,
    padding: "24px 24px 36px 24px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    zIndex: 1,
  },
  additionalText: {
    textTransform: "none",
    fontSize: `${themes.fontSizes.secondaryMiddle}px`,
    paddingLeft: "4px",
  },
  errorMessage: {
    fontSize: `${themes.fontSizes.basic}px`,
    color: themes.colours.blue200,
    paddingTop: "24px",
  },
}));

interface IHomeProps {
  errorMessage: string;
  onRunTestCase: () => void;
  onShowFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Home: FC<IHomeProps> = ({ errorMessage, onRunTestCase, onShowFile }) => {
  const classes = useStyles();
  const inputRef = useRef<null | HTMLInputElement>(null);

  const uploadButtonHandler = () =>
    inputRef.current && inputRef.current.click();

  return (
    <Box className={classes.container}>
      <Box className={classes.wrapper}>
        <ActionLogIn titleText="Run custom case:" action={uploadButtonHandler}>
          Select{"  "}
          <Typography className={classes.additionalText}>
            (must be txt)
          </Typography>
          <input
            type="file"
            ref={inputRef}
            onChange={onShowFile}
            style={{ display: "none" }}
          />
        </ActionLogIn>

        <ActionLogIn titleText="Run test case:" action={onRunTestCase}>
          go
        </ActionLogIn>

        {!!errorMessage && (
          <Typography className={classes.errorMessage}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default Home;
