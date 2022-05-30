import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const PlayerLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box w="100vw" h="100vh" bg="yellow.600">
      <Box position="absolute" top="0" left="0" width="250px">
        Sidebar
      </Box>
      <Box marginLeft="250px" marginBottom="100px">
        {children}
      </Box>
      <Box position="absolute" left="0" bottom="0" height="100px">
        Player
      </Box>
    </Box>
  );
};

export default PlayerLayout;
