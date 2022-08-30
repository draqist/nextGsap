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
        bg="red"
        minW="100vw"
      >
        <Grid color="white" h="100%" templateColumns={'repeat(9, 1fr)'}>
          <GridItem colSpan={4} textAlign="center" pos='relative'>
            <Heading
              fontSize="450px"
              fontFamily="JetBrains Mono"
              fontWeight="200"
            >
              0
            </Heading>
            <Flex
              alignItems="center"
              gap="4"
              pos="absolute"
              bottom="0px"
              left="0px"
              color="red.100"
            >
              <Text fontSize="18px" textTransform="uppercase">
                Scroll 
              </Text>
              <Icon as={BsArrowRight} fontSize="20px" />
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center">
            <Box w="1px" bg="white" h="100%"></Box>
          </GridItem>
          <GridItem colSpan={4}>
            <Text as={motion.p} initial={{ y: 150, opacity: 0 }} whileInView={{ y: '0', opacity:1, transition: { duration: 1.25, ease: 'easeInOut',}}} viewport={{ once: true }}>
            adipisicing commodo Lorem eu ullamco anim dolor cillum fugiat sint
            enim ipsum. Enim duis do cupidatat commodo laborum sunt Lorem non
            proident magna qui consequat commodo ipsum. Tempor minim laborum
            aliquip labore non proident aute. Velit magna adipisicing proident
            pariatur velit voluptate incididunt. Qui velit mollit ad ipsum
            proident labore nisi in ea quis labore et. Deserunt nisi voluptate
            cupidatat aliqua excepteur. Cillum laboris dolore exercitation sit
            minim ullamco ullamco sit aliquip ullamco. Ex veniam esse sint id
            sint veniam exercitation tempor culpa eu velit sint. Excepteur ad
            quis labore pariatur cillum non non commodo laborum adipisicing.
            Minim reprehenderit et aute dolore consequat excepteur ad. Excepteur
            incididunt occaecat excepteur ad et mollit excepteur. Do in anim
            labore mollit aliquip adipisicing do ea mollit ipsum ea eu mollit.
            Commodo proident ad consectetur incididunt veniam enim laborum.
            Adipisicing dolore tempor dolore consectetur adipisicing minim.
            Tempor consectetur ipsum incididunt esse velit ullamco tempor esse
            labore quis proident.
            </Text>
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
