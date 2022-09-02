import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc

// fonts: {
//   heading: `"Monument Extended", sans-serif`,
//   body: `"DM Mono","TT Hoves", sans-serif`,
// },

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const fonts = {
  heading: `"Bon Foyage Demo", sans-serif`,
  body: `"DM Mono","Oswald",sans-serif`,
};
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        // bg: "#04374b",
        minHeight: '100vh',
        h: '100%'
      },
    },
  },
  config,
  fonts,
});
