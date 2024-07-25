import { searchResults } from "@/data/data"
import { InfoIcon, InfoOutlineIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/next-js"
import { Box, Card, Text } from "@chakra-ui/react"

export default function SearchResults() {
  return (
    <>
      {searchResults.map((result, index) => (
        <Card key={index} mb="20px" p="20px" borderRadius={"20px"}>

          {result.hasAppointment ? (<>
            <Box mb="5px" bg="brand.peachPuff" display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} px="2" py="1" borderRadius={"20px"}>
              <InfoOutlineIcon color="brand.peachPuff2" position={"relative"} top="0px" />
              <Text fontWeight={"bold"} color={"brand.peachPuff2"} fontSize={"15px"}>
                You have an exisiting appointment with this doctor. <Link href="#" color="gray.500">View Detials</Link>
              </Text>
            </Box>
          </>) : ""}

          s
        </Card>
      ))}
    </>
  )
}
