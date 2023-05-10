import Head from "next/head";
import Image from "next/image";
import { GraphQLClient } from "graphql-request";
import { useState, useEffect } from "react";
import SongDisplay from "@/components/SongDisplay";
import {
  HStack,
  VStack,
  Text,
  Box,
  useMediaQuery,
  Center,
} from "@chakra-ui/react";
import SongSelect from "@/components/SongSelect";
import MediaPlayer from "@/components/MediaPlayer";

const zoraAPI = new GraphQLClient("https://api.zora.co/graphql");

export default function Home() {
  const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1080px)");
  const [testTokenInfo, setTestTokenInfo] = useState();
  const [fullTokenArray, setFullTokenArray] = useState();
  const [songToQuery, setSongToQuery] = useState("Moonrise");
  const [apiQuery, setApiQuery] = useState(`query ChaosSongs {
    tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
    pagination: {limit: 500},
    where: {collectionAddresses: "0x8427e46826a520b1264B55f31fCB5DDFDc31E349"}
  filter: {attributeFilters: [{traitType: "Song", value:"Moonrise"}]}){
      nodes {
        token {
          collectionAddress
          tokenId
          name
          owner
          image {
            url
          }
          metadata
        }
      }
    }
  }`);

  function handleSelectChange(onSongSelect) {
    setSongToQuery(onSongSelect);
    console.log("index file got this from the song select: ", onSongSelect);
  }

  //when apiQuery changes, we run this useEffect to get the data, and parse it properly to set the full token array, which is used to render the song selects
  useEffect(() => {
    async function getData() {
      const data = await zoraAPI.request(apiQuery);
      console.log(data);
      setFullTokenArray(data.tokens.nodes);
      setTestTokenInfo(data.tokens.nodes[0].token);
      console.log("set testTokenInfo to: ", data.tokens.nodes[0]?.token);
    }
    getData();
  }, [apiQuery]);

  //when songToQuery changes, we change the apiQuery
  useEffect(() => {
    setApiQuery(`query ChaosSongs {
      tokens(networks: [{network: ETHEREUM, chain: MAINNET}],
      pagination: {limit: 500},
      where: {collectionAddresses: "0x8427e46826a520b1264B55f31fCB5DDFDc31E349"}
    filter: {attributeFilters: [{traitType: "Song", value:"${songToQuery}"}]}){
        nodes {
          token {
            collectionAddress
            tokenId
            name
            owner
            image {
              url
            }
            metadata
          }
        }
      }
    }`);
    console.log("song to query useEffect ran");
  }, [songToQuery]);

  useEffect(() => {
    console.log("this is the fullTokenArray: ", fullTokenArray);
  }, [fullTokenArray]);

  return (
    <>
      <VStack>
        {isSmallerThanDesktop ? (
          <VStack w="100%">
            <SongSelect onSongSelect={handleSelectChange} />
            <MediaPlayer
              src={testTokenInfo?.metadata.losslessAudio.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              )}
            />

            <Box w={"95%"}>
              <Box borderWidth="1px" borderRadius="lg" p="2">
                <Center>
                  <Text>{testTokenInfo?.metadata.description}</Text>
                </Center>
              </Box>
              <Box borderWidth="1px" borderRadius="lg" p="2">
                <Center>
                  <Text>
                    {testTokenInfo?.metadata.collaborators.replaceAll(
                      ", ",
                      " · "
                    )}
                  </Text>
                </Center>
              </Box>
            </Box>

            <Box borderWidth="1px" borderRadius="lg" p="2" w={"90%"}>
              <Center>
                <Text>Editions in Exisistence: {fullTokenArray?.length}</Text>
              </Center>
            </Box>
          </VStack>
        ) : (
          <HStack
            w={"100%"}
            justify={"flex-start"}
            justifyContent={"space-between"}
            pb={"40px"}
            pt={"52px"}
            maxW={"1285px"}
          >
            <SongSelect onSongSelect={handleSelectChange} />
            <Box>
              <HStack>
                <Box pr={"22px"}>
                  <Text>
                    {testTokenInfo?.metadata.description
                      .split(",")[0]
                      .toUpperCase()}
                  </Text>
                </Box>
                <Box>
                  <Text>
                    {testTokenInfo?.metadata.description
                      .split(",")[1]
                      .replace(".", "")
                      .toUpperCase()}
                  </Text>
                </Box>
                <Box p="2">
                  <Text pl={"100.5px"}>
                    {testTokenInfo?.metadata.collaborators
                      .replaceAll(", ", "  •  ")
                      .toUpperCase()}
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box p="2">
              <Text>{fullTokenArray?.length} EDITIONS</Text>
            </Box>

            <MediaPlayer
              src={testTokenInfo?.metadata.losslessAudio.replace(
                "ipfs://",
                "https://ipfs.io/ipfs/"
              )}
            />
          </HStack>
        )}

        {isSmallerThanDesktop ? (
          <VStack>
            {fullTokenArray?.map((token, index) => (
              <SongDisplay key={index} token={token.token} />
            ))}
          </VStack>
        ) : (
          <HStack
            flexWrap="wrap"
            justifyContent={"center"}
            w={"100%"}
            maxW={"1500px"}
          >
            {fullTokenArray?.map((token, index) => (
              <SongDisplay key={index} token={token.token} />
            ))}
          </HStack>
        )}
      </VStack>
    </>
  );
}
