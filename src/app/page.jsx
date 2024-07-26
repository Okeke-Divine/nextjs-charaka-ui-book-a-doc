'use client'
import Footer from '@/components/footer';
import Header from '@/components/header';
import SearchSection from '@/components/SearchSection';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box px={"2vw"} pt={"20px"}>
        <Header />
        <Box px="20px">
          <SearchSection />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
