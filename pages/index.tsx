import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Highlight,
  Icon,
  Text,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { sentence, thourist, letter, moreThourist } from '../utils/deets';

export default function Home() {
  useEffect(() => {
    // gsap.to
  }, []);
  return (
    <Flex wrap="nowrap" minH="100vh" overflowY="hidden">
      <Box
        color="white"
        px={['20px', '20px', '40px', '40px', '', '']}
        pt={['20px', '20px', '40px', '40px', '40px', '10px']}
        minW="100vw"
        minH="100%"
        bgImage="./pexels-alex-azabache-3185488.jpg"
        pos="relative"
        bgPosition="center"
      >
        <Heading fontWeight="500" fontSize="160px" lineHeight="140px">
          Thourist
        </Heading>

        <Flex
          alignItems="center"
          gap="4"
          pos="absolute"
          bottom="40px"
          left="40px"
          color="red.100"
        >
          <Text fontSize="24px" textTransform="uppercase">
            Scroll Horizontally
          </Text>
          <Icon as={BsArrowRight} fontSize="28px" />
        </Flex>
        <Box maxW="340px" pos="absolute" bottom="40px" right="40px">
          <Text fontSize="16px">
            {' '}
            Experience the world brightly and with color through your
            screens,with{' '}
            <Highlight
              query="Thourist"
              styles={{
                whiteSpacing: 'none',
                color: 'red.400',
                fontWeight: '700',
              }}
            >
              Thourist
            </Highlight>{' '}
            you become one with unique sights and beautiful attractions from
            different corners of the world.
          </Text>
          {/* Feast your eyes on the wonders of culture and heritage. */}
        </Box>
      </Box>
      <Box
        maxH="100vh"
        px={['20px', '20px', '40px', '40px', '50px', '']}
        py={['20px', '20px', '40px', '40px', '45px', '10px']}
        bg="#04374b"
        minW="100vw"
      >
        <Grid color="white" h="100%" templateColumns={'repeat(9, 1fr)'}>
          <GridItem colSpan={4} textAlign="center" pos="relative">
            <Heading
              fontSize="450px"
              fontFamily="JetBrains Mono"
              fontWeight="200"
            >
              0
            </Heading>
          </GridItem>
          <GridItem display="flex" justifyContent="center">
            <Box w="1px" bg="white" h="100%"></Box>
          </GridItem>
          <GridItem
            colSpan={4}
            as={motion.div}
            initial={{ opacity: 0.5 }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{ once: true }}
            pos="relative"
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
              <Box mt="40px" textAlign="justify">
                {thourist.split('').map((char, index) => {
                  return (
                    <Text
                      fontFamily="DM Mono"
                      fontSize="16px"
                      as={motion.p}
                      display="inline"
                      key={char + '-' + index}
                      variants={letter}
                      color="white"
                    >
                      {char}
                    </Text>
                  );
                })}
              </Box>
              <Box mt="30px" textAlign="justify">
                {moreThourist.split('').map((char, index) => {
                  return (
                    <Text
                      fontFamily="DM Mono"
                      fontSize="16px"
                      as={motion.p}
                      display="inline"
                      key={char + '-' + index}
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
            >
              <Text fontSize="18px" textTransform="uppercase">
                Scroll
              </Text>
              <Icon as={BsArrowRight} fontSize="20px" />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Box
        color="white"
        px={['20px', '20px', '40px', '40px', '', '']}
        py={['20px', '20px', '40px', '40px', '40px', '10px']}
        minW="100vw"
        minH="100%"
        bgImage="./pexels-alex-azabache-3185488.jpg"
        pos="relative"
        bgPosition="center"
      >
        <Heading fontWeight="500" fontSize="160px" lineHeight="140px">
          Thourist
        </Heading>

        <Box maxW="340px" pos="absolute" bottom="40px" right="40px">
          <Text fontSize="16px">
            {' '}
            Experience the world brightly and with color through your
            screens,with{' '}
            <Highlight
              query="Thourist"
              styles={{
                whiteSpacing: 'none',
                color: 'red.400',
                fontWeight: '700',
              }}
            >
              Thourist
            </Highlight>{' '}
            you become one with unique sights and beautiful attractions from
            different corners of the world.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
  // Feast your eyes on the wonders of culture and heritage.
}
