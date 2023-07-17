import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

import withRedux from "next-redux-wrapper";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const config = {
    initialColorMode: "light",
    //  If true, your app will change color mode based on the user's system preferences.
    useSystemColorMode: false,
  };

  // 3. extend the theme
  const theme = extendTheme({ config });

  return (
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </QueryClientProvider>
    </PersistGate>
  );
}

const makeStore = () => store;
export default withRedux(makeStore)(App);
