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
} from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";

const SongDisplay = ({ token }) => {
  const [showPopover, setShowPopover] = useState(false);

  const name = token.name;
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
    <Box borderWidth="1px" borderRadius="lg" h="475px" w="250px" align="center">
      <VStack spacing="0" align="stretch" pt="10px">
        <a
          href={`https://opensea.io/assets/ethereum/0x8427e46826a520b1264b55f31fcb5ddfdc31e349/${tokenId}`}
          target="_blank"
        >
          <Image src={imageURL} h="200px" />
        </a>

        <Text>{name}</Text>
        <Text>Token Id: {tokenId}</Text>

        {attributes.map((attr) => {
          if (attributeNames.includes(attr.trait_type)) {
            return (
              <Text>
                {attr.trait_type}: {attr.value}
              </Text>
            );
          }
        })}
      </VStack>
    </Box>
  );
};

export default SongDisplay;
