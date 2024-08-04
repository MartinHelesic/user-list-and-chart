import { createTheme, Theme } from "@mui/material";

const getTheme = (): Theme =>
  createTheme({
    components: {
      MuiTypography: {
        styleOverrides: {
          h2: {
            marginTop: "10px",
            marginBottom: "20px",
            color: "teal",
          },
        },
      },

      MuiButtonBase: {
        styleOverrides: {
          root: {
            textAlign: "left",
          },
        },
      },
    },
  });

export default getTheme;
