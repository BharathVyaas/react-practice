import { createTheme } from "@mui/material/styles";

export const getTheme = (mode = "light") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#90caf9" : "#1976d2",
      },
      secondary: {
        main: mode === "dark" ? "#f48fb1" : "#9c27b0",
      },
      background: {
        default: mode === "dark" ? "#121212" : "#f5f5f5",
        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
      },
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      fontSize: 14,
    },
    components: {
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
    },
  });
