import {
  Box,
  Flex,
  Heading,
  Highlight,
  Icon,
  Link,
  Text
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';

export default function index() {
  function scroll(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <AnimatePresence>
    <Flex wrap="nowrap" h="100vh" w="100%" bg="yellow" overflow="scroll">
      <Box
        minW="100vw"
        bg="green"
        minH="100vh"
        pos="relative"
        px={['10px', '20px', '80px', '100px', '100px', '']}
        pt={['20px', '20px', '40px', '80px', '60px', '10px']}
        as={motion.div}
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          originX: 0,
          x: 0,
          transition: { duration: 2.5, ease: 'anticipate' },
        }}
      >
        <Heading
          fontWeight="500"
          fontSize={['110px', '', '150px', '220px']}
          lineHeight={['100px', '', '140px', '170px']}
          color="red.200"
          // mt={['60px']}
        >
          Thourist
        </Heading>
        <Flex
          cursor="pointer"
          _hover={{ textDecoration: 'underline' }}
          alignItems="center"
          gap="4"
          pos="absolute"
          bottom="40px"
          left={['', '', '80px', '80px', '100px']}
          color="red.100"
          display={['none', 'none', 'flex']}
          onClick={() => scroll('about')}
        >
          <Text
            fontSize={['', '', '', '28px', '24px']}
            textTransform="uppercase"
          >
            Scroll
          </Text>

          <Icon as={BsArrowRight} fontSize="28px" />
        </Flex>
        <Box
          maxW={['', '', '400px', '500px', '340px']}
          pos="absolute"
          bottom="40px"
          right={['0', '', '40px']}
          px={['20px', 'unset']}
        >
          <Text fontSize={['18px', '', '', '24px', '16px', '36px']}>
            {' '}
            Experience the world brightly and with color through your
            screens,with{' '}
            <Highlight
              query="Thourist"
              styles={{
                whiteSpacing: 'none',
                color: 'red.300',
                fontWeight: '700',
              }}
            >
              Thourist
            </Highlight>{' '}
            you become one with unique sights and beautiful attractions from
            different corners of the world.
          </Text>
          {/* Feast your eyes on the wonders of culture and heritage. */}
          <Link isExternal href="https://draq.tech">
            <Text mt="40px" fontWeight="200">
              {' '}
              Designed and developed by Draq
            </Text>
          </Link>
        </Box>
      </Box>
      <Box minW="100vw" bg="gray" maxH="100vh"></Box>
    </Flex>
    </AnimatePresence>
  );
}
