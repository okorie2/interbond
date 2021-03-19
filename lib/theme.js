import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  fonts: {
    heading: "Play",
    body: "Montserrat",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
  colors: {
    black: "#16161D",
    brand: {
      900: "#952C0F",
      800: "#BD4E2D",
      700: "#E5704C",
      600: "#FF936D",
      500: "#FFB88E",
    },
  },
  breakpoints,
});

export default theme;
