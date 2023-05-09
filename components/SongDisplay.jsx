import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Text,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  IconButton,
  HStack,
  Divider,
  Center,
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

const SongDisplay = ({ token }) => {
  const [showPopover, setShowPopover] = useState(false);

  const name = token.name.replace(/.*-\s*/, "");
  const imageURL = token.image.url.replace("ipfs://", "https://ipfs.io/ipfs/");
  const album = token.metadata.album;
  const collaborators = token.metadata.collaborators;
  const songCredits = token.metadata.songCredits;
  const attributes = token.metadata.attributes;
  const tokenId = token.tokenId;

  const attributeNames = [
    "Paper",
    "Layout",
    "Layout Color",
    "Cover Art Color",
    "Logo",
    "Logo Color",
    "Ribbon",
    "Ribbon Color",
  ];

  return (
    <Box p={"12px"}>
      <Box
        borderWidth="px"
        borderRadius={"4px"}
        h="615px"
        w="408px"
        align="center"
        borderColor={"rgba(90, 90, 90, 0.25)"}
        boxShadow={"4px 4px 12px rgba(117, 117, 117, 0.15)"}
      >
        <VStack spacing="0" align="stretch">
          <a
            href={`https://opensea.io/assets/ethereum/0x8427e46826a520b1264b55f31fcb5ddfdc31e349/${tokenId}`}
            target="_blank"
          >
            <Image src={imageURL} h="408px" w={"408px"} borderRadius="4px" />
          </a>
          <HStack justify={"space-between"} p={"12px"}>
            <Text color={"#FFFDF8"} fontSize={"12px"}>
              #{tokenId}
            </Text>
            <Text color={"#FFFDF8"}>{name.toUpperCase()}</Text>
          </HStack>
          <Center>
            <Divider w={"384px"} h="1px" borderBottom={"1px solid rgba(90, 90, 90, 0.25)"} boxShadow={"4px 4px 12px rgba(117, 117, 117, 0.15)"}/>
          </Center>

          <Box p="12px">
            {attributes.map((attr) => {
              if (attributeNames.includes(attr.trait_type)) {
                return (
                  <HStack>
                    <Text color={"rgba(255, 253, 248, 0.5)"}>
                      {attr.trait_type.toUpperCase()}
                    </Text>
                    <Text>{attr.value.toUpperCase()}</Text>
                  </HStack>
                );
              }
            })}
          </Box>
        </VStack>
      </Box>
    </Box>
  );
};

export default SongDisplay;
