import React from "react";
import {
  Flex,
  Text,
  Center,
  Image,
  useMediaQuery,
  Box,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { ConnectKitButton } from "connectkit";
import { CustomButton } from "./CustomButton";

export default function Navbar() {
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1080px)");

  return (
    <Flex
      flexDir={"row"}
      py={"28px"}
      borderBottom={"1px solid rgba(90, 90, 90, 0.25)"}
      justify={"center"}
    >
      <HStack flexDir={"row"} justifyContent={"space-between"} w={"100%"} maxW={"1285px"}>
        <Center>
          <Image
            src="https://chaos.build/images/chaos-logo_light.svg"
            pr={"12px"}
            h={"32px"}
          />
          <Image src="https://ipfs.io/ipfs/bafybeidnc4xlsfvc5wpcllsit7xp2sogkeepvqrymyymwkehcphv2nu4ba/Group 110.svg"></Image>
        </Center>
        
        <CustomButton/>
      </HStack>
    </Flex>
  );
}
