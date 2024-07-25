'use client'
import Footer from '@/components/footer';
import Header from '@/components/header';
import SearchSection from '@/components/SearchSection';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Box px={{ sm: "10px", md: "15px", lg: "20px" }} pt="20px">
        <Header />
        <SearchSection />
      </Box>
      <Footer />
    </>
  );
}
