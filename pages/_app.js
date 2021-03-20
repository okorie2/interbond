import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Fonts from "../lib/Fonts";
import theme from "../lib/theme";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />

      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <Component {...pageProps} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
