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
  VStack,
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
      <HStack
        flexDir={"row"}
        justifyContent={"space-between"}
        w={"100%"}
        maxW={"1285px"}
        mx={isSmallerThanDesktop ? "5%" : "null"}
      >
        {isSmallerThanDesktop ? (
          <VStack>
            <Image
              src="https://chaos.build/images/chaos-logo_light.svg"
              maxH={"20px"}
            />
            <Image
              src="https://ipfs.io/ipfs/bafybeidnc4xlsfvc5wpcllsit7xp2sogkeepvqrymyymwkehcphv2nu4ba/Group 110.svg"
              maxH={"20px"}
            ></Image>
          </VStack>
          
        ) : (
          <Center>
            <Image
              src="https://chaos.build/images/chaos-logo_light.svg"
              pr={"12px"}
              maxH={"32px"}
            />
            <Image src="https://ipfs.io/ipfs/bafybeidnc4xlsfvc5wpcllsit7xp2sogkeepvqrymyymwkehcphv2nu4ba/Group 110.svg"></Image>
          </Center>
        )}

        <CustomButton />
      </HStack>
    </Flex>
  );
}
