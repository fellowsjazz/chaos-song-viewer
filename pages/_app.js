import { WagmiConfig, createClient } from "wagmi";
import {
  ConnectKitProvider,
  ConnectKitButton,
  getDefaultClient,
} from "connectkit";
import { Flex } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";
import { ChakraProvider } from "@chakra-ui/react";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "NFT Inventory",
    alchemyId,
  })
);

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ChakraProvider>
        <Flex m={"1%"} flexDir={"column"}>
          <Navbar />

          <Component {...pageProps} />
        </Flex>
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  );
}
