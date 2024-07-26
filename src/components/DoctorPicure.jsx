import React, { useState } from 'react';
import { Box, Avatar, IconButton, Flex, Spacer, Circle, Stack } from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { FaHeart } from "react-icons/fa";

const DoctorPicure = ({ result }) => {

    const [liked, setLiked] = useState(result.liked);

    return (
        <Box position="relative" w="full" h="full" p="4">
            <Box position="relative" w="full" h="full">
                <Avatar
                    bg="gray.200"
                    src={result.img}
                    name={result.name}
                    w='full'
                    h='full'
                    borderRadius="20px"
                    minHeight="150px"
                />
                <IconButton
                    aria-label="Like"
                    icon={<FaHeart />}
                    onClick={() => setLiked(!liked)}
                    position="absolute"
                    color={liked ? "brand.pink": ""}
                    top="10px"
                    left="10px"
                    backgroundColor="white"
                    borderRadius="50%"
                />
                <Flex position="absolute" top="50%" left="10px" transform="translateY(-50%)">
                    <IconButton
                        aria-label="Previous"
                        icon={<ArrowLeftIcon />}
                        backgroundColor="white"
                        borderRadius="50%"
                    />
                </Flex>
                <Flex position="absolute" top="50%" right="10px" transform="translateY(-50%)">
                    <IconButton
                        aria-label="Next"
                        icon={<ArrowRightIcon />}
                        backgroundColor="white"
                        borderRadius="50%"
                    />
                </Flex>
            </Box>
            <Flex justifyContent="center" mt="2">
                <Stack direction="row" spacing="4px">
                    {[...Array(5)].map((_, index) => (
                        <Circle key={index} size="8px" bg={index === 0 ? 'gray.600' : 'gray.300'} />
                    ))}
                </Stack>
            </Flex>
        </Box>
    );
};

export default DoctorPicure;
