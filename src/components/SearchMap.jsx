import { HiMiniMapPin } from "react-icons/hi2";
import { Box, Button, Flex, Icon } from "@chakra-ui/react";

export default function SearchMap() {
  return (
    <Box
      mb="20px"
      p="20px"
      borderRadius="20px"
      border="1px"
      borderColor="gray.100"
    >

      <Box>
        <img src="/images/map.png" borderRadius="20px" />
        <Flex justify={"center"}>
          <Button bg="white" border="1px" borderColor={"gray.100"} mt="20px" borderRadius={"full"}>
            <Icon as={HiMiniMapPin} position={"relative"} top="-1px" />
            View in a map
          </Button>
        </Flex>
      </Box>

    </Box>
  )
}
