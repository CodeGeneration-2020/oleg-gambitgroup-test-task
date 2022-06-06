import React, { FC, ReactNode } from "react";
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 475,
      md: 768,
      lg: 1024,
      xl: 1440,
    },
  },
  palette: {
    primary: {
      main: "#1858E8",
    },
    secondary: {
      main: "#C82010",
    },
    error: {
      main: "#C82010",
    },
    background: {
      default: "#fff",
    },
  },
});

const AppTheme: FC<{ children?: ReactNode }> = ({ children }) => (
  <StyledEngineProvider injectFirst>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  </StyledEngineProvider>
);

export default AppTheme;
