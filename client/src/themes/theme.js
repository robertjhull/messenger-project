import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 14,
    button: {
      textTransform: "none",
      letterSpacing: 0,
      fontWeight: "bold",
      height: 56,
      width: 160,
      boxShadow: `0px 2px 1px -2px rgb(0 0 0 / 6%), 
                  0px 2px 6px 0px rgb(0 0 0 / 7%), 
                  0px 1px 4px 0px rgb(0 0 0 / 6%)`
    },
    h4: {
      fontSize: "1.9rem",
      fontWeight: "bolder",
    },
    subtitle1: {
      fontSize: ".9rem",
    },
  },
  overrides: {
    MuiInput: {
      input: {
        fontWeight: "bold"
      }
    }
  },
  palette: {
    primary:   { main: "#3A8DFF" },
    secondary: { 
      main: "#B0B0B0",
      light: "#FFF",
    },
    fade: {
      main: "#3A8DFFD9", 
      light: "#86B9FFD9", 
    }
  },
});
