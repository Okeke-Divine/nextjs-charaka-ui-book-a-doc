import { Link } from "@chakra-ui/next-js";
import { Box, Divider, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import Logo from "./logo";

export default function Footer() {
    return (
        <Box bg='brand.charcoal' py="5vh" px={"10vw"}>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10} pb="20px" color={"gray.200"}>
                <Box>
                    <Box display="flex" gap="2" alignItems={"center"}>
                        <Logo />
                        <Heading as="h4" size="md" fontWeight={"bold"}>BookADoc</Heading>
                    </Box>
                    <Box py="10px">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque pariatur ducimus fugiat nobis nostrum delectus.
                    </Box>
                </Box>
                <Box>
                    <Text pt="15px" pb="20px">SERVICES FOR PATIENTS</Text>
                    <Flex direction="column" gap="2">
                        <Link href="#">Doctor Search</Link>
                        <Link href="#">Appointment Bookings</Link>
                        <Link href="#">Patient Reviews</Link>
                    </Flex>
                </Box>
                <Box>
                    <Text pt="15px" pb="20px">SERVICES FOR DOCTORS</Text>
                    <Flex direction="column" gap="2">
                        <Link href="#">Profile Listing</Link>
                        <Link href="#">Appointment Management</Link>
                        <Link href="#">Patient Feedback</Link>
                    </Flex>
                </Box>
                <Box>
                    <Text pt="15px" pb="20px">CONTACT US</Text>
                    <Flex direction="column" gap="2">
                        <Link href="#">1-888-123-4567</Link>
                        <Link href="#">help@bookadoc.com</Link>
                    </Flex>
                </Box>
            </SimpleGrid>

            <Divider borderColor="gray.700" />

            <Box color={'gray.500'} pt='20px'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate officiis est ex blanditiis tenetur veritatis atque odit, eos illum voluptatum soluta impedit excepturi corporis error exercitationem eius? Id, ut dignissimos.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate officiis est ex blanditiis tenetur veritatis atque odit, eos illum voluptatum soluta impedit excepturi corporis error exercitationem eius? Id, ut dignissimos.
            </Box>
        </Box>
    )
}
