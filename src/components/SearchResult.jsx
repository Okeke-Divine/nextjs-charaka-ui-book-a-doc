import { CalendarIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons"
import { Link } from "@chakra-ui/next-js"
import { Avatar, AvatarGroup, Box, Button, Card, Text } from "@chakra-ui/react"

export default function SearchResult({ result }) {
  return (
    <>
      <Card mb="20px" p="20px" borderRadius={"20px"} border="1px" borderColor={"gray.100"} boxShadow={"none"}>

        {result.hasAppointment ? (<>
          <Box mb="5px" bg="brand.peachPuff" display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} px="2" py="1" borderRadius={"20px"}>
            <InfoOutlineIcon color="brand.peachPuff2" position={"relative"} top="0px" />
            <Text fontWeight={"bold"} color={"brand.peachPuff2"} fontSize={"15px"}>
              You have an exisiting appointment with this doctor. <Link href="#" color="gray.500">View Detials</Link>
            </Text>
          </Box>
        </>) : ""}

        {result.bookedInThePast ? (<>
          <Box mb="5px" display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} px="2" py="1" borderRadius={"20px"}>
            <InfoOutlineIcon color="gray.500" position={"relative"} top="0px" />
            <Text fontWeight={"bold"} color={"gray.500"} fontSize={"15px"}>
              You booked this provider in the past.
            </Text>
          </Box>
        </>) : ""}

        <Box display={{ sm: "block", lg: "flex" }} gap={5} mt="10px">
          <Box flex={{ base: "1", lg: "1" }}>
            <Avatar bg="gray.200" src={result.img} name={result.name} w='full' h='full' borderRadius={"20px"} mb={{ sm: "10px", lg: "0px" }} />
          </Box>

          <Box flex={{ base: "1", lg: "5" }}>
            <Text fontWeight={"bold"} fontSize={"20px"}>{result.name}</Text>
            <Box color="gray.600" fontWeight={550} >
              <Text fontSize={"16px"} mt="2px">{result.career}</Text>
              <Box mt="10px">
                <Text fontSize={"16px"}>{result.address}</Text>
              </Box>
              {/* review */}
              <Box display={"flex"} gap={2} alignItems={"center"} mt="10px">
                <Box
                  bg="orange.100"
                  color="orange.500"
                  py={1}
                  px={3}
                  borderRadius="10px"
                  fontSize="sm"
                  display="flex"
                  alignItems="center"
                >
                  <StarIcon boxSize={3} mr={1} />
                  {result.rating}
                </Box>
                <Text textDecoration={"underline"}>({result.reviewsCount} reviews)</Text>
              </Box>

              {/* Avatar group */}
              <Box mt="5px" display={"flex"} gap={3} flexWrap={"wrap"} alignItems={"center"}>
                <AvatarGroup size='sm' max={3}>
                  <Avatar name='User' src='/images/img1.png' />
                  <Avatar name='Second User' src='/images/img2.png' />
                  <Avatar name='My Name' src='/images/img3.png' />
                  <Avatar name='Full Name' src='/images/img4.png' />
                </AvatarGroup>
                <Box>
                  {result.avartarText}
                </Box>
              </Box>

            </Box>
          </Box>

          <Box gap={2} justifyContent={"end"} display={"flex"} flex={{ base: "1", lg: "2" }}>
          
            <Button display={"flex"} gap={2} bg="white" borderRadius={"full"} border="1px" borderColor={"gray.100"}><InfoOutlineIcon /> More Info</Button>
          
            {result?.cantBook == true ? "" : (<>
              <Button display={"flex"} gap={2} bg="brand.charcoal" color="white" borderRadius={"full"} border="1px" borderColor={"gray.100"}><CalendarIcon /> Book {result.bookedInThePast ? "Again" : "Appointment"}</Button>
            </>)}

          </Box>

        </Box>
      </Card>
    </>
  )
}
