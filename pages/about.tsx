import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function about() {
  return (
    <AnimatePresence initial={true}>
      <Box
        w="100vw"
        // maxH={['100vh', '', '100vh']}
        h='100vh'
        bg="#04374b"
        as={motion.div}
        initial={{ opacity: 0, x: -14 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, ease: 'easeIn' },
        }}
        pos='absolute'
        color='white'
      >
        <Navbar/>
        <Sidebar />
        <Flex
          position="relative"
          top={['60px',"0"]}
          left={['0','',"60px"]}
          px={['20px', '20px', '30px', '60px', '100px', '']}
          pt={['50px', '20px', '40px', '80px', '100px', '10px']}
          pr={['20px', '', '30px']}
          w='calc(100% -120px)'
          justifyContent="space-between"
          gap="10"
          direction={['column', 'column', 'column', 'row']}
        >
          <Box flexBasis={['100%','','',"50%",]}>
            <Heading> Thourist </Heading>
            <Box mt="28px" textAlign="justify">
              <Text lineHeight="40px">
                Thourist is a project which was inspired by Canals designed by
                Marcus Brown and developed by Aristide Benoist. It aims to
                showcase the different wonders of the world; from natural
                locations to man-made creations. Thourist shows you sights with
                certain significance from different parts of the world
              </Text>
            </Box>
            <Box mt="16px" textAlign="justify">
              <Text lineHeight="40px">
                Design and Developed by:{' '}
                <Link isExternal href="https://draq.tech">
                  Draq
                </Link>
              </Text>
            </Box>
          </Box>
          <Box flexBasis="50%"></Box>
        </Flex>
      </Box>
    </AnimatePresence>
  );
}
