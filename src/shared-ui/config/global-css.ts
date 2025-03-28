import { defineGlobalStyles } from '@pandacss/dev';

export const globalCss = defineGlobalStyles({
  'html, body': {
    padding: 0,
    margin: 0,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
  html: {
    boxSizing: 'border-box',
  },

  body: {
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
