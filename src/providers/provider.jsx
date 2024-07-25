'use client'

import theme from '@/utils/themes'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({children}) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}