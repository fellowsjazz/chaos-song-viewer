import React from "react";
import { Flex, Text, Center } from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";

export default function Navbar() {
  return (
    <Flex flexDir={"row"} justify={"space-around"}>
      
      <Center>
        <Text fontSize='xl' fontWeight='bold'>CHAOS ART APPRECIATION APP</Text>
      </Center>
      <ConnectKitButton />
    </Flex>
  );
}
