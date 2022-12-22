import { Source_Sans_Pro } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const sourceSansPro = Source_Sans_Pro({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#c4d6d5",
    },
    secondary: {
      main: "#ccbcad",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#263341",
    },
  },
  typography: {
    fontFamily: sourceSansPro.style.fontFamily,
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
  MuiStyleOverrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [sourceSansPro.style.fontFace],
      },
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
      fontWeight: 900,
      lineHeight: 1,
      letterSpacing: "-0.01562em",
      color: theme.palette.primary.main,
    },
    body1: {
      color: theme.palette.primary.main,
    },
  },
});

export default theme;
