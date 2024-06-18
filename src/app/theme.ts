"use client";
import { Poppins } from "next/font/google";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS
const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

const PRIMARY = {
  lighter: "#D1E9FC",
  light: "#76B0F1",
  main: "#2065D1",
  dark: "#103996",
  darker: "#061B64",
  contrastText: "#fff",
};

const SECONDARY = {
  lighter: "#D6E4FF",
  light: "#314E4B",
  main: "#1B4C48",
  dark: "#1939B7",
  darker: "#091A7A",
  contrastText: "#fff",
};

const INFO = {
  lighter: "#D0F2FF",
  light: "#74CAFF",
  main: "#1890FF",
  dark: "#0C53B7",
  darker: "#04297A",
  contrastText: "#fff",
};

const SUCCESS = {
  lighter: "#E9FCD4",
  light: "#AAF27F",
  main: "#54D62C",
  dark: "#229A16",
  darker: "#08660D",
  contrastText: GREY[800],
};

const WARNING = {
  lighter: "#FFF7CD",
  light: "#FFE16A",
  main: "#FFC107",
  dark: "#B78103",
  darker: "#7A4F01",
  contrastText: GREY[800],
};

const ERROR = {
  lighter: "#FFE7D9",
  light: "#FFA48D",
  main: "#FF4842",
  dark: "#B72136",
  darker: "#7A0C2E",
  contrastText: "#fff",
};

const palette = {
  common: { black: "#000", white: "#fff", green: "#4ef542", red: "#f2573f" },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: "#fff",
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: GREY[600],
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: poppins.style.fontFamily,
  },
  palette: palette,
  spacing: 1,
  components: {
    MuiButton: {
      styleOverrides: {
        root: { minWidth: 0 },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          minHeight: "3.5rem",
          "&.Mui-disabled": {
            "& svg": { color: palette.text.disabled },
          },
          "&:hover": {
            backgroundColor: alpha(palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: palette.action.focus,
            border: {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              color: "white",
            },
          },
          color: palette.grey[0],
        },
        input: {
          "&::placeholder": {
            opacity: 1,
            color: palette.text.disabled,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        underline: {
          "&:before": {
            borderBottomColor: alpha(palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(palette.grey[500], 0.12),

          "&:hover": {
            backgroundColor: alpha(palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: palette.action.focus,
          },
          "&.Mui-disabled": {
            backgroundColor: palette.action.disabledBackground,
          },
        },
        underline: {
          "&:before": {
            borderBottomColor: alpha(palette.grey[500], 0.56),
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: alpha(palette.grey[500], 0.32),
            borderWidth: "medium",
          },
          "&.Mui-disabled": {
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: palette.action.disabledBackground,
            },
          },
          "&:hover": {
            backgroundColor: alpha(palette.grey[500], 0.16),
          },
          "&.Mui-focused": {
            backgroundColor: palette.action.focus,
            "& .MuiOutlinedInput-notchedOutline": {
              color: "white",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          "&:hover": {
            color: "#e0e0e0",
          },
          "&.Mui-focused": {
            color: "#ffffff",
            borderColor: "#ffffff",
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {
          zIndex: 3000,
        },
      },
    },
  },
});

export default theme;
