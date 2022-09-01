const sentence = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.065,
      delayChildren: 1,
    },
  },
};
const letter = {
  hidden: { opacity: 0.2, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const letter2 = {
  hidden: { opacity: 0.2, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const thourist =
  'THOURIST gives you an in-depth view into several popular sight and  tourist attractions in the world.Taking breath-taking shots of  spectacles around the globe, these gems have either been produced by the wonders of nature or by the intellect blessed upon man to craft these beautiful and memorable representations into existence.Ranging from islands, skyscrapers, ancient temples, Thourist gives you the full details on each and every place listed ';
const moreThourist =
  'Providing you with both day and night-time images of the locations, to give you the true feeling of what being a native of these areas mean. ';

const navanime = {
  initial: { opacity: 0, x: '-100vw' },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.25,
      ease: 'anticipate',
      staggerChildren: 1,
      delayChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: { duration: 1.25, ease: 'easeOut' },
  },
};

export { thourist, sentence, letter, letter2, moreThourist, navanime };

{
  /* <Flex pos='relative' className='skews' style={{filter:'url(#svg-distortion-filter)'}}>
          {
            data.filter((s, idx) => idx < 4).map((tours, id) => (
              <Box
                key={id}
                color="white"
                px={['20px', '20px', '40px', '40px', '100px', '']}
                py={['20px', '20px', '40px', '40px', '40px', '10px']}
                minW="100vw"
                minH="100%"
                bgImage={tours.image}
                pos="relative"
                bgPosition="right"
                bgSize='cover'
                bgBlendMode='overlay'
                bgColor='#00000052'
                as={motion.div}
                initial={{ scale: 1.1, opacity: 0, skew: '-30deg', rotate: '0deg' }}
                whileInView={{scale: 1, opacity: 1, skew: '0deg', transition:{transform: 1.5, duration: 1.5, } }}
            >
              <Heading fontWeight="500" fontSize="100px" lineHeight="120px">
                {tours.location}
                </Heading>
                <Box pos="absolute" bottom="40px">
                  <Link href='/'> Read More ...</Link>
                </Box>
              <Box maxW="540px" pos="absolute" bottom="40px" right="40px">
                <Text fontSize="16px">
                    {' '}{ tours.tagline}{' '}
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

            ))
          }
        </Flex> */
}
