import { HiMiniMapPin } from "react-icons/hi2";
import { CalendarIcon, InfoOutlineIcon, StarIcon } from "@chakra-ui/icons";
import { Link } from "@chakra-ui/next-js";
import { Avatar, AvatarGroup, Box, Button, Card, Divider, Flex, Icon, Text } from "@chakra-ui/react";
import { useState } from "react";
import DoctorPicure from "./DoctorPicure";
import DateTime from "./DateTime";

export default function SearchResult({ result }) {

  const [isLiked, setIsLiked] = useState(result.liked);

  return (
    <>
      <Card
        mb="20px"
        p="20px"
        borderRadius="20px"
        border="1px"
        borderColor="gray.100"
        boxShadow="none"
        transition="border-color 0.3s ease, box-shadow 0.3s ease"
        _hover={{ borderColor: "purple.400", boxShadow: "lg" }}
      >

        {result.hasAppointment && (
          <Box mb="20px" bg="brand.peachPuff" display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} px="2" py="1" borderRadius={"20px"}>
            <InfoOutlineIcon color="brand.peachPuff2" position={"relative"} top="0px" />
            <Text fontWeight={"bold"} color={"brand.peachPuff2"} fontSize={"15px"}>
              You have an existing appointment with this doctor. <Link href="#" color="gray.500">View Details</Link>
            </Text>
          </Box>
        )}

        {result.bookedInThePast && (
          <Box mb="20px" display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} px="2" py="1" borderRadius={"20px"}>
            <InfoOutlineIcon color="gray.500" position={"relative"} top="0px" />
            <Text fontWeight={"bold"} color={"gray.500"} fontSize={"15px"}>
              You booked this provider in the past.
            </Text>
          </Box>
        )}

        <Box display={{ sm: "block", lg: "flex" }} gap={5}>
          <Box flex={{ base: "1", lg: "" }} minWidth={"250px"}>
            <DoctorPicure result={result} />
            {/* <Divider h={{ sm: "20px", lg: "0px" }} /> */}
          </Box>

          <Box display={{ sm: "block", lg: "flex" }} justifyContent={"space-between"} flex={{ base: "1", lg: "5" }}>
            <Box>
              <Text fontWeight={"bold"} fontSize={"20px"}>{result.name}</Text>
              <Box color="gray.600" fontWeight={550}>
                <Text fontSize={"16px"} mt="2px">{result.career}</Text>
                <Box mt="10px" display="flex" gap={1} alignItems={"center"}>
                  <Icon as={HiMiniMapPin} position={"relative"} top="-2px" />
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

            <Box gap={2} mt={"10px"} display={"flex"} flex={{ base: "1", lg: "2" }}>

              <Button display={"flex"} gap={2} bg="white" borderRadius={"full"} border="1px" borderColor={"gray.100"}><InfoOutlineIcon /> More Info</Button>

              {result?.cantBook === true ? "" : (
                <Button display={"flex"} gap={2} bg="brand.charcoal" color="white" borderRadius={"full"} border="1px" borderColor={"gray.100"}
                  _hover={{ bg: "black" }}
                ><CalendarIcon /> Book {result.hasAppointment ? "Again" : "Appointment"}</Button>
              )}

            </Box>
          </Box>
        </Box>

        {/* Date and Time Selection Component */}
        <Box p={1}>
          <DateTime result={result} />
        </Box>
      </Card>
    </>
  );
}
