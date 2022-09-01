import { Box, Circle, Flex, Link, Text, VStack } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { navanime } from '../utils/deets';

const Sidebar = (props: any) => {
  const [nav, setNav] = useState(false);
  const bg = nav ? '#04374b' : 'transparent';
  return (
    <Box
      pos="absolute"
      left="0"
      top="0"
      w="60px"
      h="100vh"
      style={{ backgroundColor: bg }}
      transform={"rotate('90') blur(10)"}
      zIndex="4"
      borderRight="1px solid #ffffff45"
      display={['none', '', 'block']}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.05 } }}
    >
      <Box
        pt="44px"
        px="16px"
        placeContent="center"
        h="104px"
        borderBottom="1px solid #ffffff45"
      >
        <VStack
          cursor="pointer"
          onClick={() => {
            setNav(!nav);
          }}
          alignItems="flex-start"
        >
          <Box h="1px" bg="#ffffff" w="100%"></Box>
          <Box h="1px" bg="#ffffff" w="75%"></Box>
          <Box h="1px" bg="#ffffff" w="45%"></Box>
        </VStack>
      </Box>
      <AnimatePresence>
        {nav ? (
          <Box
            pos="absolute"
            left="60px"
            top="0px"
            as={motion.div}
            variants={navanime}
            initial="initial"
            animate="animate"
            exit="exit"
            h="100vh"
            w="calc(100vw - 58px)"
            bg="#04374b"
            zIndex="5"
            boxShadow={'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}
            px="50px"
            display="flex"
            alignItems="flex-start"
            justifyContent="space-between"
            py="30px"
          >
            <VStack gap="4" alignItems="flex-start">
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
                    fontSize="120px"
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
                    fontSize="120px"
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
                    fontSize="120px"
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
                    fontSize="120px"
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
      <Box>
        <Link isExternal href="https://draq.tech">
          <Flex
            gap="10px"
            className="credits"
            top={['', '', '400px', '440px', '290px']}
          >
            <Box fontSize="12px" textTransform="uppercase">
              <Text> Designed</Text>
            </Box>
            <Box fontSize="12px" textTransform="uppercase">
              <Text> and</Text>
            </Box>
            <Box fontSize="12px" textTransform="uppercase">
              <Text> developed</Text>
            </Box>
            <Box fontSize="12px" textTransform="uppercase">
              <Text> by</Text>
            </Box>
            <Box fontSize="12px" textTransform="uppercase">
              <Text color="red.300"> Draq</Text>
            </Box>
          </Flex>
        </Link>
      </Box>
    </Box>
  );
};

export default Sidebar;
