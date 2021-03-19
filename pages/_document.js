import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { ColorModeScript } from "@chakra-ui/react";

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <title>Sonny Nlewedim</title>
          <meta
            name="description"
            content="Chief Sonny Nlewedim Detailed Portfolio. It shows his progression as a political thought leader and industrialist."
          />
        </Head>

        <body>
          {/* Make Color mode to persists when you refresh the page. */}
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
