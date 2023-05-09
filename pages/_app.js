

import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "NFT Inventory",
    alchemyId,
  })
);

//creating the default chakra theme

export default function App({ Component, pageProps }) {
  //creating the default chakra theme
 
  const theme = extendTheme({
    styles: {
      global: {
        "html, body": {
          color: "#FFFDF8",
          fontSize: "12px",
          bgColor:"#181818",
          
        },
      },
    },
    fonts:{
      
    }
  });
  

  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider theme="midnight">
        <ChakraProvider theme={theme}>
          
          <Flex flexDir={"column"} bgColor={"#131313"}>
            <Navbar />

            <Component {...pageProps} />
          </Flex>
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
