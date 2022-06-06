import React, { FC } from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuOptions from "../../components/MenuOptions";
import { useRedirectDashboard } from "../../hooks/useRedirectDashboard";
import { themes } from "../../styles/theme";
import { IParsedData } from "../../types/parser.types";

export const useStyles = makeStyles(() => ({
  container: {
    marginTop: "48px",
    paddingBottom: "60px",
    display: "flex",
    flexDirection: "row-reverse",
  },
  wrapper: {
    width: "100%",
    padding: "4px 8px",
    borderRadius: "4px",
    border: `1px solid ${themes.colours.ink300}`,
    display: "flex",
  },
  tabsWrapper: {
    display: "flex",
  },
  tabItem: {},
}));

interface IDashboardProps {
  assetData?: string | null;
  parsedData?: IParsedData | null;
  currentStep: number;
  onChangeStep: (newStep: number) => void;
}

const Dashboard: FC<IDashboardProps> = ({
  assetData,
  parsedData,
  currentStep,
  onChangeStep,
}) => {
  const classes = useStyles();
  const isFullPackData =
    Object.values((parsedData as IParsedData)?.data).length === 100;

  const menu = useRedirectDashboard(
    currentStep,
    parsedData,
    assetData,
    isFullPackData
  );

  return (
    <Box className={classes.container}>
      <MenuOptions
        currentStep={currentStep}
        isFullPackData={isFullPackData}
        onChangeStep={onChangeStep}
      />
      <Box className={classes.wrapper}>{menu}</Box>
    </Box>
  );
};

export default Dashboard;
