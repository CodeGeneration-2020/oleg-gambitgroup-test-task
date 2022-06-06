import React, { FC } from "react";
import { Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";
import { IContentHeaderProps } from "../../types/parser.types";

export const useStyles = makeStyles(() => ({
  content: {
    fontSize: `${themes.fontSizes.tertiary}px`,
    color: themes.colours.blue200,
    fontWeight: 500,
    "&:first-letter": {
      fontSize: ({ isCapitalize }: IContentHeaderProps) =>
        isCapitalize && `${themes.fontSizes.fourfoldQuarter}px`,
      fontWeight: ({ isCapitalize }: IContentHeaderProps) =>
        isCapitalize && 700,
    },
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    color: themes.colours.blue200,
    fontSize: `${themes.fontSizes.secondary}px`,
  },
}));

interface IHeaderContentProps {
  content?: string;
  buttonText: string;
  capitalize?: boolean;
  action: () => void;
}

const HeaderContent: FC<IHeaderContentProps> = ({
  content,
  buttonText,
  capitalize,
  action,
}) => {
  const classes = useStyles({
    isCapitalize: !!capitalize,
  });

  return (
    <>
      <Typography className={classes.content}>{content}</Typography>
      <Box className={classes.buttonWrapper}>
        <Button variant="text" onClick={action} className={classes.button}>
          {buttonText}
        </Button>
      </Box>
    </>
  );
};

export default HeaderContent;
