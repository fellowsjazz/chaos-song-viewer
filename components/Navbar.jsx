import React from "react";
import { Flex, Text, Center, Image, useMediaQuery, Box } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

export default function Navbar() {
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1024px)");

  return (
    <Flex flexDir={"row"} justify={"space-between"}>
      <Center>
        <Image
          src="https://chaos.build/images/chaos-logo_light.svg"
          filter={"invert(1)"}
        />
      </Center>
      {isSmallerThanDesktop ? (
        <Box ><ConnectKitButton/></Box>
        
      ) : (
        <ConnectKitButton />
      )}
    </Flex>
  );
}
