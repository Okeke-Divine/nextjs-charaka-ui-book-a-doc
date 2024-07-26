import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Text, Flex, Input } from '@chakra-ui/react';
import { useState } from 'react';

const RatingComponent = () => {
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <Flex gap="2">

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.200" borderRadius="10px">
        <Text fontSize="lg" fontWeight="bold">1</Text>
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
          <SliderFilledTrack bg='purple.400' />
        </SliderTrack>
        <SliderThumb boxSize={6}>
          <Box color='purple.100' />
        </SliderThumb>
      </Slider>

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.200" borderRadius="10px">
        <Text fontSize="lg" fontWeight="bold">5</Text>
      </Box>

      <Box w="40px" h="40px" display="flex" alignItems="center" justifyContent="center" border="1px" borderColor="gray.200" borderRadius="10px">
        <Text fontSize="lg" fontWeight="bold" color={sliderValue >= 4 ? 'orange.400' : 'black'}>
          {sliderValue >= 4 ? '4+' : sliderValue}
        </Text>
      </Box>

    </Flex>
  );
};

export default RatingComponent;