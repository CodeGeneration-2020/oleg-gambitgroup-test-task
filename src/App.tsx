import React, { ChangeEvent, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./styles/globals.css";
import { assetTestCase } from "./consts/variables";
import Dashboard from "./pages/Dashboard";
import Header from "./components/Header";
import Home from "./pages/Home";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { themes } from "./styles/theme";
import { IParsedData } from "./types/parser.types";
import { getParsedFileData } from "./utils/parseFile";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    minHeight: "100vh",
    backgroundColor: themes.colours.ink700,
  },
  wrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    margin: "0 auto",
  },
  gridItem: {
    maxWidth: "1440px",
  },
}));

function App() {
  const classes = useStyles();
  const [asset, setAsset] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<IParsedData | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [error, setError] = useState("");

  const showFile = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    try {
      const reader = new FileReader();
      const targetValue = (e.target as HTMLInputElement)?.files;
      const textFile = (targetValue as FileList)[0];
      const fileType = textFile.name.split(".").reverse()[0];

      if (fileType === "txt") {
        reader.onload = (e: ProgressEvent<FileReader>) => {
          const target = e.target as FileReader;
          const text = target && target.result;
          !!text && setAsset(text as string);
        };
        setError("");
        setCurrentStep(0);
        reader.readAsText(textFile);
      } else {
        setError("Error: Provide wrong file type");
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    asset && setParsedData(getParsedFileData(asset));
  }, [asset]);

  const handleChangeStep = (newStep: number) => setCurrentStep(newStep);

  const handleLogout = () => {
    setAsset(null);
    setParsedData(null);
  };

  const uploadTestCaseHandler = () => {
    setCurrentStep(0);
    setAsset(assetTestCase);
  };

  return (
    <Box className={classes.container}>
      {!!parsedData && (
        <Header
          isExistData={!!parsedData}
          date={parsedData?.date}
          onSetAsset={uploadTestCaseHandler}
          onLogout={handleLogout}
        />
      )}
      <Grid container className={classes.wrapper}>
        <Grid item xs={12} sm={8} className={classes.gridItem}>
          {parsedData && !error ? (
            <Dashboard
              assetData={asset}
              parsedData={parsedData}
              currentStep={currentStep}
              onChangeStep={handleChangeStep}
            />
          ) : (
            <Home
              onShowFile={showFile}
              onRunTestCase={uploadTestCaseHandler}
              errorMessage={error}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
