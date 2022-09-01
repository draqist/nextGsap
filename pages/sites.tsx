import { Box } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

export default function sites() {
  return (
    <AnimatePresence initial={true}>
      <Box
        as={motion.div}
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      >
        sites
      </Box>
    </AnimatePresence>
  );
}
