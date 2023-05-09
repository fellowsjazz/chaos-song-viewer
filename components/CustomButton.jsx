import { ConnectKitButton } from "connectkit";
import { Button, Text } from "@chakra-ui/react";

export const CustomButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <Button onClick={show} w={"88px"} h={"40px"} borderRadius="2px">
            <Text color={"#131313"}>{isConnected ? ensName ?? truncatedAddress : "CONNECT"}</Text>
          </Button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
