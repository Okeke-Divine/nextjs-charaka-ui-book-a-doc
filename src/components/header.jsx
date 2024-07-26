import { TfiTarget } from "react-icons/tfi";
import { IoShieldOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { Box, Button, Divider, Flex, Icon, Input, Link, Select, Spacer, Text } from "@chakra-ui/react";
import Logo from "./logo";
import { ArrowDownIcon, ChevronDownIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";

export default function Header() {
    return (
        <Box
            bg="linear-gradient(14deg, rgba(246,227,243,1) 0%, rgba(236,241,245,1) 58%);"
            py={4}
            borderRadius={"20px"}
            px={{ sm: "10px", lg: '20px' }}
        >
            <Flex justify="space-between" align="center">
                <Flex align="center" gap="2">
                    <Logo />
                    <Text fontSize="2xl" fontWeight="bold">
                        BookADoc
                    </Text>
                </Flex>
                <Flex gap="4" display={{ sm: "none", lg: "flex" }}>
                    <Link href="#">Services <ChevronDownIcon /> </Link>
                    <Link href="#">Doctors <ChevronDownIcon /> </Link>
                    <Link href="#">About Us</Link>
                    <Link href="#">Blog</Link>
                    <Link href="#">Contact Us</Link>
                </Flex>
                <Flex gap="4">
                    <Button bg="white" borderRadius={"full"} px="20px" py="7px">Sign In</Button>
                    <Button bg="white" borderRadius={"full"} px="20px" py="7px">Clinic Sign Up</Button>
                </Flex>
            </Flex>
            <Spacer h="40px" />
            <Flex justify="center">
                <Flex
                    mt={8}
                    bg="white"
                    borderRadius="full"
                    boxShadow="md"
                    align="center"
                    p="3"
                    gap="2"
                >
                    <Icon as={CiSearch} mr={2} />
                    <Input
                        placeholder="Migraine"
                        border="none"
                        _focus={{ border: "none" }}
                    />
                    <Divider orientation="vertical" mx={2} />
                    <Box w="full" display={"flex"} alignItems={"center"}>
                        <Icon as={TfiTarget} mr={2} />
                        <Input
                            placeholder="40361"
                            border="none"
                            w="full"
                            _focus={{ border: "none" }}
                            pl={-4}
                        />
                    </Box>
                    <Divider orientation="vertical" mx={2} />
                    <Icon as={IoShieldOutline} mr={2} />
                    <Select
                        placeholder="Agile Health Insurance"
                        border="none"
                        _focus={{ border: "none" }}
                        pl={4}
                    >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                    </Select>
                    <Button
                        width={"full"}
                        borderRadius="full"
                        px="20px"
                        py="7px"
                        background={"brand.pink"}
                        color="white"
                        fontSize={"15px"}
                        maxWidth={"150px"}
                    >
                        SEARCH
                    </Button>
                </Flex>
            </Flex>
            <Spacer h="10px" />
        </Box>
    );
}
