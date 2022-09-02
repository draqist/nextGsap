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
import Sidebar from '../components/Sidebar';
import {
  letter,
  letter2,
  moreThourist,
  sentence,
  thourist
} from '../utils/deets';

export default function Home() {
  function scroll(id: string) {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  return (
    <AnimatePresence initial={true} exitBeforeEnter>
      <Sidebar />
      <Box
        pos="absolute"
        w="100vw"
        h="100vh"
        bg="#04374b81"
        as={motion.div}
        initial={{ y: 0 }}
        animate={{ y: '-100vh', transition: { duration: 1, ease: 'easeOut' } }}
        exit={{y: '-100vh', transition: { duration: 2.5, delay: 1, ease: 'easeOut'}}}
      ></Box>
      <Flex
        wrap="nowrap"
        // h="100vh"
        w='100%'
        overflowY="hidden"
        // overflowX='scroll'
        scrollSnapType={'x proximity'}
        scrollBehavior="smooth"
        as={motion.div}
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 1,
          originX:0,
          x: 0,
          transition: { duration: 2.5, ease: 'anticipate' },
        }}
      >
        <Box
          color="white"
          px={['10px', '20px', '80px', '100px', '100px', '']}
          pt={['50px', '20px', '40px', '80px', '60px', '10px']}
          pr={['unset', '', 'unset']}
          minW="100vw"
          minH="100vh"
          bgImage="./pexels-alex-azabache-3185488.jpg"
          bgPosition="center"
          // pos='relative'
          top='0'
          right='0'
        >
          <Heading
            fontWeight="500"
            fontSize={['110px', '', '150px', '220px']}
            lineHeight={['100px', '', '140px', '170px']}
            color="red.200"
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
          // maxH="100vh"
          px={['20px', '20px', '40px', '40px', '50px', '']}
          py={['20px', '20px', '40px', '40px', '45px', '10px']}
          bg="#04374b"
          minW="100vw"
          zIndex="3"
          scrollSnapAlign={'center'}
          id="about"
          display={['none', 'none', 'block']}
        >
          <Grid
            color="white"
            h="100%"
            templateColumns={['none', '', 'repeat(9, 1fr)']}
            templateRows={['repeat(2, 1fr)', '', 'none']}
          >
            <GridItem
              colSpan={4}
              textAlign="center"
              pos="relative"
              borderBottom={['1px solid #ffffff45', '', 'none']}
              mb={['30px', '', '0']}
            >
              <Heading
                fontSize={['200px', '', '450px']}
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
              as={motion.div}
              initial={{ opacity: 0.2 }}
              whileHover={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              pos="relative"
              display={['none', 'none', 'none', 'none', 'block']}
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
                <Box mt={['15px', '', '40px']} textAlign="justify">
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
                <Box mt={['15px', '', '30px']} textAlign="justify">
                  {moreThourist.split('').map((char, index) => {
                    return (
                      <Text
                        fontFamily="DM Mono"
                        fontSize="16px"
                        as={motion.p}
                        display="inline"
                        key={char + '$' + index}
                        variants={letter2}
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
                display={['none', 'none', 'flex']}
                opacity="0.3"
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
            <GridItem
              colSpan={4}
              as={motion.div}
              initial={{ opacity: 0.2 }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              pos="relative"
              display={['none', 'none', 'block', 'block', 'none']}
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
                <Box mt={['15px', '', '40px']} textAlign="justify">
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
                <Box mt={['15px', '', '30px']} textAlign="justify">
                  {moreThourist.split('').map((char, index) => {
                    return (
                      <Text
                        fontFamily="DM Mono"
                        fontSize="16px"
                        as={motion.p}
                        display="inline"
                        key={char + '$' + index}
                        variants={letter2}
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
                display={['none', 'none', 'flex']}
                opacity="0.3"
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
        <Box
          maxH="100vh"
          px={['20px', '20px', '40px', '40px', '50px', '']}
          py={['20px', '20px', '40px', '40px', '45px', '10px']}
          bg="#04374b"
          minW="100vw"
          zIndex="3"
          scrollSnapAlign={'center'}
          id="about"
          display={['block', 'block', 'none']}
        >
          <Grid
            color="white"
            h="100%"
            templateColumns={['none', '', 'repeat(9, 1fr)']}
            templateRows={['repeat(8, 1fr)', '', 'none']}
          >
            <GridItem
              colSpan={4}
              rowSpan={1}
              textAlign="center"
              pos="relative"
              borderBottom={['1px solid #ffffff45', '', 'none']}
              mb={['30px', '', '0']}
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
                <Box mt={['30px', '', '40px']} textAlign="center">
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
  // Feast your eyes on the wonders of culture and heritage.
}
