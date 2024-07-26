import React, { useState, useRef } from 'react';
import { Box, Button, IconButton, VStack, Text, HStack, Flex, Spacer, Divider } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { dateNdTime } from '@/data/data';

const DateTime = ({ result }) => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [expandedDays, setExpandedDays] = useState({});
    const containerRef = useRef(null);

    const handleDayClick = (day, times) => {
        if (times.length > 0) {
            setSelectedDay(day);
            setSelectedTime(null);
        }
    };

    const handleTimeClick = (time) => {
        setSelectedTime(time);
    };

    const handleScrollForward = () => {
        containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    const handleScrollBackward = () => {
        containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const toggleExpand = (day) => {
        setExpandedDays((prev) => ({
            ...prev,
            [day]: !prev[day],
        }));
    };

    return (
        <>
            {result.showDate ? (<>

                <Box>
                    <Spacer h="20px" />
                    <Divider />
                    <Spacer h="20px" />

                    <HStack justifyContent="space-between" mb={4}>
                        <IconButton
                            icon={<ArrowBackIcon />}
                            onClick={handleScrollBackward}
                        />
                        <Flex overflowX="auto" ref={containerRef}>
                            <HStack spacing={3} alignItems={"start"} maxWidth="100%">
                                {dateNdTime.map((item, index) => (
                                    <VStack
                                        key={index}
                                        border="1px solid #e2e8f0"
                                        borderRadius="20px"
                                        p={5}
                                        borderColor="gray.100"
                                        onClick={() => handleDayClick(item.date, item.time)}
                                        flexShrink={0}
                                        opacity={item.time.length === 0 ? 0.5 : 1}
                                        pointerEvents={item.time.length === 0 ? 'none' : 'auto'}
                                    >
                                        <Box
                                            border="1px"
                                            borderColor={selectedDay === item.date ? 'purple.400' : ''}
                                            bg={selectedDay === item.date ? 'purple.50' : ''}
                                            color={selectedDay === item.date ? 'purple.900' : ''}
                                            // colorScheme={selectedDay === item.date ? 'purple' : 'gray'}
                                            display="flex" justifyContent={"center"} alignItems={"center"}
                                            w="100px" h="100px" borderRadius={"10px"}
                                        >
                                            <Box
                                            >
                                                <Text textAlign={"center"} fontWeight="bold">{item.day}</Text>
                                                <Text textAlign={"center"}>{item.date}</Text>
                                            </Box>
                                        </Box>
                                        {
                                            result.showTime ? (
                                                <>

                                                    {item.time.slice(0, expandedDays[item.date] ? item.time.length : 3).map((time, timeIndex) => (
                                                        <Button
                                                            key={timeIndex}
                                                            borderRadius={"10px"}
                                                            size="sm"
                                                            variant={time === '-' ? 'ghost' : 'outline'}
                                                            colorScheme={selectedTime === time && selectedDay === item.date ? 'purple' : 'gray'}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                handleDayClick(item.date, item.time)
                                                                handleTimeClick(time);
                                                            }}
                                                            p={5}
                                                        >
                                                            {time}
                                                        </Button>
                                                    ))}
                                                    {item.time.length > 3 && (
                                                        <Button size="sm" variant="link" colorScheme="purple" onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleExpand(item.date);
                                                        }}>
                                                            {expandedDays[item.date] ? 'See Less' : 'See More'}
                                                        </Button>
                                                    )}

                                                </>) : ""
                                        }
                                    </VStack>
                                ))}
                            </HStack>
                        </Flex>
                        <IconButton
                            icon={<ArrowForwardIcon />}
                            onClick={handleScrollForward}
                        />
                    </HStack>
                </Box>

            </>) : ""
            }
        </>
    );
};

export default DateTime;
