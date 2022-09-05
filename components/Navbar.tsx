import { Box, Circle, Flex, Heading, Link, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { navanime2 } from '../utils/deets';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  return (
    <Flex
      pos="fixed"
      display={['flex', 'none']}
      w="100%"
      h="60px"
      alignItems="center"
      zIndex="5"
      borderBottom="1px solid #ffffff45"
      px="20px"
      justifyContent="space-between"
      as={motion.div}
      initial={{ opacity: 0 ,y: '-20'}}
      animate={{ opacity: 1, y:0, transition: { delay: 2 , duration: .5, } }}
    >
      <Box>
        <Heading color="white" fontWeight="300">
          {' '}
          Thourist{' '}
        </Heading>
      </Box>
      <Box>
        <VStack
          cursor="pointer"
          onClick={() => {
            setNav(!nav);
          }}
          display={['flex', '']}
          alignItems="flex-end"
        >
          <Box h="1px" bg="#ffffff" w="40px"></Box>
          <Box h="1px" bg="#ffffff" w="75%"></Box>
          <Box h="1px" bg="#ffffff" w="45%"></Box>
        </VStack>
      </Box>
      <AnimatePresence>
        {nav ? (
          <Box
            pos="absolute"
            top="0px"
            left="0"
            as={motion.div}
            variants={navanime2}
            initial="initial"
            animate="animate"
            exit="exit"
            h="100vh"
            w="100vw"
            bg="#04374b"
            zIndex="5"
            boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
            px="50px"
            display="flex"
            alignItems="center"
            // justifyContent="space-between"
            gap="10"
            // pt="20px"
            flexDirection="column-reverse"
          >
            <VStack gap="12" alignItems="flex-start">
              <NextLink href="/" passHref>
                <Link
                  _hover={{ opacity: 1, color: 'white', textShadow: 'none' }}
                  className="link"
                  display="flex"
                  alignItems="center"
                  gap="16"
                  lineHeight="130px"
                  onClick={() => setNav(!nav)}
                >
                  <Text fontWeight="300"> [00]</Text>
                  <Text
                    fontFamily="Bon Foyage Demo"
                    fontWeight="600"
                    letterSpacing="6px"
                    fontSize="60px"
                  >
                    {' '}
                    Overview{' '}
                  </Text>
                </Link>
              </NextLink>
              <NextLink href="/sites" passHref>
                <Link
                  _hover={{ opacity: 1, color: 'white', textShadow: 'none' }}
                  className="link"
                  display="flex"
                  alignItems="center"
                  gap="16"
                  lineHeight="130px"
                  onClick={() => setNav(!nav)}
                >
                  <Text fontWeight="300"> [01]</Text>
                  <Text
                    fontFamily="Bon Foyage Demo"
                    fontWeight="600"
                    letterSpacing="6px"
                    fontSize="60px"
                  >
                    {' '}
                    Sites{' '}
                  </Text>
                </Link>
              </NextLink>
              <NextLink href="/about" passHref>
                <Link
                  _hover={{ opacity: 1, color: 'white', textShadow: 'none' }}
                  className="link"
                  display="flex"
                  alignItems="center"
                  gap="16"
                  lineHeight="130px"
                  onClick={() => setNav(!nav)}
                >
                  <Text fontWeight="300"> [02]</Text>
                  <Text
                    fontFamily="Bon Foyage Demo"
                    fontWeight="600"
                    letterSpacing="6px"
                    fontSize="60px"
                  >
                    {' '}
                    About{' '}
                  </Text>
                </Link>
              </NextLink>
              <NextLink href="/something" passHref>
                <Link
                  _hover={{ opacity: 1, color: 'white', textShadow: 'none' }}
                  className="link"
                  display="flex"
                  alignItems="center"
                  gap="16"
                  lineHeight="130px"
                  onClick={() => setNav(!nav)}
                >
                  <Text fontWeight="300"> [03]</Text>
                  <Text
                    fontFamily="Bon Foyage Demo"
                    fontWeight="600"
                    letterSpacing="6px"
                    fontSize="60px"
                  >
                    {' '}
                    Nonsense
                  </Text>
                </Link>
              </NextLink>
            </VStack>
            <Circle
              as={motion.div}
              size="100px"
              border="2px solid white"
              textAlign="center"
              onClick={() => setNav(!nav)}
              opacity="0.3"
              _hover={{ opacity: 1, transition: 'all .35s' }}
            >
              <IoMdClose fontSize="48px" fontWeight="300" />
            </Circle>
          </Box>
        ) : null}
      </AnimatePresence>
    </Flex>
  );
};

export default Navbar;
