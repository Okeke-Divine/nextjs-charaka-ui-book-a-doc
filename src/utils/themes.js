import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      gray: {
        500: '#85807e',
        100: '#f8f8f8',
        900: '#3b3e4a',
      },
      lavender: '#edeaf5',
      charcoal: '#121a29',
      slateGray: '#a4b2c1',
      gainsboro: '#d4d7dc',
      whiteSmoke: '#fcfcfc',
      pink: '#f62e7f',
      lightPink: '#f393b1',
      peachPuff: '#f8dfc0',
    },
  },
  components: {
    Checkbox: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'purple.500',
            borderColor: 'purple.500',
            _hover: {
              bg: 'purple.600',
              borderColor: 'purple.600',
            },
          },
        },
      },
    },
    Radio: {
      baseStyle: {
        control: {
          _checked: {
            bg: 'purple.500',
            borderColor: 'purple.500',
            _hover: {
              bg: 'purple.600',
              borderColor: 'purple.600',
            },
          },
        },
      },
    },
  },
});

export default theme;
