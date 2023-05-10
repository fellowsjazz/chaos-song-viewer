import { ConnectKitButton } from "connectkit";
import { Button, Text, useMediaQuery, Box } from "@chakra-ui/react";

export const CustomButton = () => {
    const [isSmallerThanDesktop] = useMediaQuery("(max-width: 1080px)");
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
            <Box>
          <Button onClick={show} w={"88px"} h={"40px"} borderRadius="2px" >
            <Text color={"#131313"}>{isConnected ? ensName ?? truncatedAddress : "CONNECT"}</Text>
          </Button>
          </Box>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
