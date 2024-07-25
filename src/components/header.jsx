import { Box, Button, Divider, Flex, Input, Link, Select, Spacer, Text } from "@chakra-ui/react";
import Logo from "./Logo";
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
                <Flex gap="4" display={{sm: "none", lg: "flex"}}>
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
                >
                    <Search2Icon />
                    <Input
                        placeholder="Migraine"
                        border="none"
                        _focus={{ border: "none" }}
                        pl={4}
                    />
                    <Divider orientation="vertical" />
                    <Input
                        placeholder="40361"
                        border="none"
                        _focus={{ border: "none" }}
                        pl={4}
                    />
                    <Divider orientation="vertical" />
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
                        fontWeight=""
                    >
                        SEARCH
                    </Button>
                </Flex>
            </Flex>
            <Spacer h="10px" />
        </Box>
    );
}
