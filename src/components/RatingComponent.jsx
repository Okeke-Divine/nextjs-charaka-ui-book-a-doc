import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const RatingComponent = () => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  const renderMarkers = () => {
    return [1, 2, 3, 4, 5].map((value) => (
      <Box
        key={value}
        position="absolute"
        left={`${(value - 1) * 25}%`}
        transform="translateX(-50%)"
        w="2px"
        h="100%"
        bg="white"
        zIndex={1}
      />
    ));
  };

  return (
    <Flex gap="2">

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.100" borderRadius="10px">
        <Text fontSize="lg">1</Text>
      </Box>

      <Slider
        aria-label="rating-slider"
        value={sliderValue}
        defaultValue={4}
        min={1}
        max={5}
        step={1}
        onChange={handleSliderChange}
        flex="1"
        mx={4}
      >
        <SliderTrack bg='purple.100'>
          {renderMarkers()}
          <SliderFilledTrack bg='purple.400' />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box
            w="100%"
            h="100%"
            borderRadius="50%"
            bg="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              w="50%"
              h="50%"
              borderRadius="50%"
              bg="purple.400"
            />
          </Box>
        </SliderThumb>
      </Slider>

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.100" borderRadius="10px">
        <Text fontSize="lg">5</Text>
      </Box>

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.100" borderRadius="10px">
        <Text fontSize="lg" color={sliderValue >= 4 ? 'orange.400' : 'black'}>
          {sliderValue >= 4 ? '4+' : sliderValue}
        </Text>
      </Box>

    </Flex>
  );
};

export default RatingComponent;