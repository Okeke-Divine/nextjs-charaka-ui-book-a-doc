import { Link } from "@chakra-ui/next-js";
import { Box, Divider, Heading, Text } from "@chakra-ui/react";
import SearchFilter from "./SearchFilter";
import SearchMap from "./SearchMap";
import SearchResults from "./SearchResults";

export default function SearchSection() {
    return (
        <Box py="50px">

            <Box mb="10px">

                <Heading color="brand.pink">Migriane <Text as="span" color="black">Illness with</Text> Agile Health Insurance</Heading>

                <Box display={{ sm: "block", md: "flex" }} flexWrap={"wrap"} mt="20px">
                    <Box></Box>
                    <Box>
                        <Link color="gray.500" href="#">Clear All Filter</Link>
                    </Box>
                </Box>

                <Box mt="20px">
                    <Text fontWeight={"bold"} fontSize={"18px"}>100+ Results</Text>
                </Box>

            </Box>

            {/* search result */}
            <Box display={{ sm: "block", lg: "flex" }} gap={10} mt="20px">
                <Box flex={{ base: "1", lg: "3" }}>
                    <SearchResults />
                </Box>
                <Box flex={{ base: "1", lg: "1" }}>
                    <SearchMap />
                    <SearchFilter />
                </Box>
            </Box>


        </Box>
    )
}
