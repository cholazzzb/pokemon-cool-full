import { Config, defineTokens } from '@pandacss/dev';
import { createStitches, globalCss } from '@stitches/react';

export const mainTheme = createStitches({
  theme: {
    colors: {
      gray: '#D9D9D9',
      primary100: 'rgba(108, 74, 182, 1)',
      primary90: 'rgba(108, 74, 182, 0.9)',
      primary50: 'rgba(108, 74, 182, 0.5)',
      secondary100: 'rgba(141, 114, 225, 1)',
      secondary50: 'rgba(141, 114, 225, 0.5)',
      tertiary100: 'rgba(141, 158, 255, 1)',
      tertiary50: 'rgba(141, 158, 255, 1)',
      neutral100: 'rgba(185, 224, 255, 0.5)',
      red100: 'rgba(233,105,87, 1)',
      red90: 'rgba(233,105,87, 0.9)',
      red50: 'rgba(233,105,87, 0.5)',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '12px',
      4: '16px',
      5: '20px',
    },
    zIndices: {
      navigator: 60,
      overlay: 50,
      pokeImage: 10,
      bottomSheet: 5,
      floatingActionButton: 2,
      searchBar: 2,
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

export const pandaMainTheme: NonNullable<Config['theme']>['extend'] = {
  tokens: {
    colors: defineTokens.colors({
      gray: { value: '#D9D9D9' },
      primary: {
        100: { value: 'rgba(108, 74, 182, 1)' },
        90: { value: 'rgba(108, 74, 182, 0.9)' },
        50: { value: 'rgba(108, 74, 182, 0.5)' },
      },
      secondary: {
        100: { value: 'rgba(141, 114, 225, 1)' },
        50: { value: 'rgba(141, 114, 225, 0.5)' },
      },
      tertiary: {
        100: { value: 'rgba(141, 158, 255, 1)' },
        50: { value: 'rgba(141, 158, 255, 1)' },
      },
      neutral: {
        100: { value: 'rgba(185, 224, 255, 0.5)' },
      },
      red: {
        100: { value: 'rgba(233,105,87, 1)' },
        90: { value: 'rgba(233,105,87, 0.9)' },
        50: { value: 'rgba(233,105,87, 0.5)' },
      },
    }),
    spacing: defineTokens.spacing({
      '1x': { value: '4px' },
      '2x': { value: '8px' },
      '3x': { value: '12px' },
      '4x': { value: '16px' },
      '5x': { value: 'px' },
    }),
    zIndex: defineTokens.zIndex({
      navigator: { value: 60 },
      overlay: { value: 50 },
      pokeImage: { value: 10 },
      bottomSheet: { value: 5 },
      floatingActionButton: { value: 2 },
      searchBar: { value: 2 },
    }),
  },
};
