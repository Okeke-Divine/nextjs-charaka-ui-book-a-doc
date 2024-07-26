import { CalendarIcon } from "@chakra-ui/icons"
import { FaRegUser } from "react-icons/fa";
import { TfiTarget } from "react-icons/tfi";
import { searchResults } from "@/data/data"
import { Link } from "@chakra-ui/next-js";
import { Box, Divider, Heading, Icon, Select, Text } from "@chakra-ui/react";
import SearchFilter from "./SearchFilter";
import SearchMap from "./SearchMap";
import SearchResult from "./SearchResult";
import { IoShieldOutline } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

export default function SearchSection() {
    return (
        <Box py="50px">

            <Box mb="10px">

                <Heading color="brand.pink">Migriane <Text as="span" color="black">Illness with</Text> Agile Health Insurance</Heading>

                <Box display={{ sm: "block", md: "flex" }} flexWrap={"wrap"} mt="20px" alignItems={"center"} justifyContent={"space-between"}>

                    <Box display={"flex"} gap="2" flexWrap={"wrap"} alignItems={"center"} >
                        <Box display={"flex"} alignItems={"center"} border="1px" borderColor="gray.100" borderRadius={"20px"} px="2">
                            <Icon as={CalendarIcon} mr={-2} />
                            <Select
                                border="none"
                                pl={-5}
                                icon={<Icon as={GoTriangleDown} />}
                                _focus={{
                                    border: "none",
                                    boxShadow: "none",
                                    outline: "none",
                                }}
                            >
                                <option value="option1">July 2024</option>
                                <option value="option1">August 2024</option>
                                <option value="option1">September 2024</option>
                            </Select>
                        </Box>

                        <Box display={"flex"} alignItems={"center"} border="1px" borderColor="gray.100" borderRadius={"20px"} px="2">
                            <Icon as={FaRegUser} mr={-2} />
                            <Select
                                border="none"
                                pl={-5}
                                icon={<Icon as={GoTriangleDown} />}
                                _focus={{
                                    border: "none",
                                    boxShadow: "none",
                                    outline: "none",
                                }}
                            >
                                <option value="option1">In-Person</option>
                                <option value="option1">Remote</option>
                            </Select>
                        </Box>

                        <Box display={"flex"} alignItems={"center"} border="1px" borderColor="gray.100" borderRadius={"20px"} px="2">
                            <Icon as={IoShieldOutline} mr={-2} />
                            <Select
                                border="none"
                                pl={-5}
                                icon={<Icon as={GoTriangleDown} />}
                                _focus={{
                                    border: "none",
                                    boxShadow: "none",
                                    outline: "none",
                                }}
                            >
                                <option value="option1">Agile Health Insurance</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Box>


                        <Box display={"flex"} alignItems={"center"} border="1px" borderColor="gray.100" borderRadius={"20px"} px="2">
                            <Icon as={TfiTarget} mr={-2} />
                            <Select
                                placeholder="430112"
                                border="none"
                                pl={-5}
                                icon={<Icon as={GoTriangleDown} />}
                                _focus={{
                                    border: "none",
                                    boxShadow: "none",
                                    outline: "none",
                                }}
                            >
                                <option value="option1">121002</option>
                                <option value="option1">641002</option>
                            </Select>
                        </Box>
                    </Box>
                    <Box>
                        <Link color="gray.500" textDecoration={"underline"} href="#">Clear All Filter</Link>
                    </Box>
                </Box>

                <Box mt="20px">
                    <Text fontWeight={"bold"} fontSize={"18px"}>100+ Results</Text>
                </Box>

            </Box>

            {/* search result */}
            <Box display={{ sm: "block", lg: "flex" }} gap={10} mt="20px">
                <Box flex={{ base: "1", lg: "3" }}>
                    {searchResults.map((result, index) => (
                        <SearchResult result={result} key={index} />
                    ))}
                </Box>
                <Box flex={{ base: "1", lg: "1" }}>
                    <SearchMap />
                    <SearchFilter />
                </Box>
            </Box>


        </Box>
    )
}
