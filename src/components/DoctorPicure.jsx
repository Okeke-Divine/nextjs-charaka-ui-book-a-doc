import React, { useState } from 'react';
import { Box, Avatar, IconButton, Flex, Spacer, Circle, Stack } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
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
                    color={liked ? "brand.pink" : ""}
                    top="10px"
                    left="10px"
                    size="sm"
                    backgroundColor="white"
                    borderRadius="50%"
                    zIndex={1}
                />
                <Box
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    _hover={{
                        '& .nav-button': {
                            opacity: 1
                        }
                    }}
                >
                    <Flex
                        position="absolute"
                        top="50%"
                        left="10px"
                        transform="translateY(-50%)"
                        opacity="0"
                        className="nav-button"
                        transition="opacity 0.3s"
                    >
                        <IconButton
                            aria-label="Previous"
                            icon={<ArrowBackIcon />}
                            backgroundColor="white"
                            borderRadius="50%"
                            size="sm"
                        />
                    </Flex>
                    <Flex
                        position="absolute"
                        top="50%"
                        right="10px"
                        transform="translateY(-50%)"
                        opacity="0"
                        className="nav-button"
                        transition="opacity 0.3s"
                    >
                        <IconButton
                            aria-label="Next"
                            icon={<ArrowForwardIcon />}
                            backgroundColor="white"
                            borderRadius="50%"
                            size="sm"
                        />
                    </Flex>
                </Box>
                <Flex
                    justifyContent="center"
                    mt="2"
                    position="absolute"
                    bottom="10px"
                    left="50%"
                    transform="translateX(-50%)"
                >
                    <Stack direction="row" spacing="4px">
                        {[...Array(5)].map((_, index) => (
                            <Circle key={index} size="8px" bg={index === 0 ? 'gray.800' : 'gray.100'} />
                        ))}
                    </Stack>
                </Flex>
            </Box>
        </Box>
    );
};

export default DoctorPicure;
