import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
