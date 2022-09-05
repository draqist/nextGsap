import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Icon,
  Link,
  Text
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import NextLink from 'next/link';
import { BsArrowRight, BsArrowUp } from 'react-icons/bs';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { letter, sentence, thourist } from '../utils/deets';

export default function index() {
  function scroll(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <AnimatePresence>
      <Sidebar />
      <Navbar />
      <Flex wrap="nowrap" h="100vh" w="100%" bg="#04374b" overflow="scroll">
        <Box
          minW="100vw"
          bg="green"
          minH="100vh"
          pos="relative"
          px={['10px', '20px', '80px', '100px', '100px', '']}
          pt={['20px', '20px', '40px', '80px', '60px', '10px']}
          as={motion.div}
          initial={{ opacity: 0, skewX: 4 }}
          animate={{
            opacity: 1,
            originX: 0,
            skewX: 0,
            transition: { duration: 2.5, ease: 'anticipate' },
          }}
          bgImage="./pexels-alex-azabache-3185488.jpg"
          bgPosition="center"
        >
          <Heading
            fontWeight="500"
            fontSize={['110px', '', '150px', '220px']}
            lineHeight={['100px', '', '140px', '170px']}
            color="red.200"
            mt={['60px', '0']}
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
        <Box
          minW="100vw"
          bg="#04374b"
          h="100%"
          px={['20px', '20px', '40px', '40px', '50px', '']}
          py={['20px', '20px', '40px', '40px', '45px', '10px']}
        >
          <Grid
            color="white"
            h="100%"
            templateColumns={['none', '', 'repeat(9, 1fr)']}
            templateRows={['repeat(9, 1fr)', '', 'unset']}
          >
            <GridItem
              colSpan={4}
              rowSpan={3}
              textAlign="center"
              pos="relative"
              borderBottom={['1px solid #ffffff45', '', 'none']}
              mb={['30px', '', '0']}
              top={['60px', 'unset']}
            >
              <Heading
                fontSize={['170px', '', '450px']}
                fontFamily="JetBrains Mono"
                fontWeight="200"
              >
                0
              </Heading>
            </GridItem>
            <GridItem display={['none', '', 'flex']} justifyContent="center">
              <Box w="1px" bg="white" h="100%"></Box>
            </GridItem>
            <GridItem
              colSpan={4}
              rowSpan={7}
              as={motion.div}
              pos="relative"
              display={['block', 'block', '']}
            >
              <Heading
                as={motion.h3}
                lineHeight="22px"
                fontWeight="400"
                letterSpacing="4"
                variants={sentence}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                About Thourist
                <Box mt={['20px', '', '40px']} textAlign="center">
                  {thourist.split('').map((char, index) => {
                    return (
                      <Text
                        fontFamily="DM Mono"
                        fontSize="16px"
                        as={motion.p}
                        display="inline"
                        key={char + '__' + index}
                        variants={letter}
                        color="white"
                      >
                        {char}
                      </Text>
                    );
                  })}
                </Box>
              </Heading>
              <Flex
                alignItems="center"
                gap="4"
                pos="absolute"
                bottom="0px"
                right="0px"
                color="red.100"
                display={['flex', 'none', 'flex']}
                opacity="1"
                _hover={{ opacity: 1, transition: 'all .25s' }}
              >
                <NextLink href="/sites" passHref>
                  <Link href="">
                    <Text fontSize="18px" textTransform="uppercase">
                      Check it out
                    </Text>
                  </Link>
                </NextLink>
                <Icon as={BsArrowUp} fontSize="20px" />
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </AnimatePresence>
  );
}
