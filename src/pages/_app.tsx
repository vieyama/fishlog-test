import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const config = {
    initialColorMode: "light",
    //  If true, your app will change color mode based on the user's system preferences.
    useSystemColorMode: false,
  };

  // 3. extend the theme
  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default App;
