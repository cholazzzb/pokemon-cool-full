import { createStitches, globalCss } from '@stitches/react';

export const mainTheme = createStitches({
  theme: {
    colors: {
      primary100: 'rgba(108, 74, 182, 1)',
      secondary100: 'rgba(141, 114, 225, 1)',
      tertiary100: 'rgba(141, 158, 255, 1)',
      neutral100: 'rgba(185, 224, 255, 1)',
      red100: 'rgba(233,105,87, 1)',
      red90: 'rgba(233,105,87, 0.9)',
    },
    zIndices: {
      overlay: 50,
      searchBar: 2,
      searchButton: 2,
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
  },
});

export const globalStyles = globalCss({
  html: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    boxSizing: 'border-box',
  },

  body: {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    height: '100vh',
  },

  '*': {
    boxSizing: 'inherit',
    scrollbarWidth: 'thin',
    scrollbarColor: 'transparent transparent',
    '&::-webkit-scrollbar': {
      width: '0px',
    },

    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'transparent',
    },
  },

  '*:before': {
    boxSizing: 'inherit',
  },

  '*:after': {
    boxSizing: 'inherit',
  },

  a: { color: 'inherit', textDecoration: 'none' },

  p: {
    margin: 0,
  },

  'input::placeholder': {
    color: 'white',
    opacity: 1,
  },
});
