import { ChakraProvider } from "@chakra-ui/provider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      {/* <Component {...pageProps} /> */}
      hello world
    </ChakraProvider>
  );
}

export default MyApp;
