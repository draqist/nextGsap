import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc

// fonts: {
//   heading: `"Monument Extended", sans-serif`,
//   body: `"DM Mono","TT Hoves", sans-serif`,
// },

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  config,
});