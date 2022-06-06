import React, { FC, SyntheticEvent } from "react";
import { Box, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { themes } from "../../styles/theme";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "12px",
  },
  menuItem: {
    color: themes.colours.blue200,
    transition: "150ms ease-in",
    fontSize: `${themes.fontSizes.tertiary}px`,
    borderLeft: `3px solid ${themes.colours.ink200}`,

    "&:hover": {
      color: themes.colours.red100,
    },
  },
}));

interface IMenuOptionsProps {
  currentStep: number;
  isFullPackData: boolean;
  onChangeStep: (newStep: number) => void;
}

const MenuOptions: FC<IMenuOptionsProps> = ({
  currentStep,
  onChangeStep,
  isFullPackData,
}) => {
  const classes = useStyles();
  const protectedNavigationTabs = isFullPackData
    ? [
        { label: "Resume", currentStep: 2 },
        { label: "Chart", currentStep: 3 },
      ]
    : [];

  const tabItems = [
    { label: "Full Text", currentStep: 0 },
    { label: "General", currentStep: 1 },
    ...protectedNavigationTabs,
  ];

  return (
    <Box className={classes.container}>
      {tabItems.map(({ currentStep: stepFromTabs, label }) => (
        <MenuItem
          key={label}
          style={{
            borderColor:
              stepFromTabs === currentStep
                ? themes.colours.ink100
                : "transparent",
          }}
          className={classes.menuItem}
          onClick={() => onChangeStep(stepFromTabs)}
        >
          {label}
        </MenuItem>
      ))}
    </Box>
  );
};

export default MenuOptions;
