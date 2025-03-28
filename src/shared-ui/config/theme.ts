import { Config, defineTokens } from '@pandacss/dev';

import { pandaRecipes, pandaSlotRecipes } from './recipe';
import { pandaKeyframes } from './keyframe';

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
} as const;

export const colorToken = {
  primary: {
    50: { value: '#fff5f0' },
    100: { value: '#ffe6db' },
    200: { value: '#ffd1bc' },
    300: { value: '#ffb494' },
    400: { value: '#ff8e63' },
    500: { value: '#ff6937' }, // Main primary
    600: { value: '#eb4f1e' },
    700: { value: '#c33812' },
    800: { value: '#9c2c11' },
    900: { value: '#7e2410' },
  },
  secondary: {
    50: { value: '#fdf4ff' },
    100: { value: '#fae5ff' },
    200: { value: '#f5ceff' },
    300: { value: '#eba7ff' },
    400: { value: '#db74ff' },
    500: { value: '#c346fc' }, // Main secondary
    600: { value: '#a928e2' },
    700: { value: '#8b1dbd' },
    800: { value: '#721a99' },
    900: { value: '#60197d' },
  },
  tertiary: {
    50: { value: '#f0fdf4' },
    100: { value: '#dcfce7' },
    200: { value: '#bbf7d0' },
    300: { value: '#86efac' },
    400: { value: '#4ade80' },
    500: { value: '#22c55e' }, // Main tertiary
    600: { value: '#16a34a' },
    700: { value: '#15803d' },
    800: { value: '#166534' },
    900: { value: '#14532d' },
  },
  gray: {
    50: { value: '#fafafa' },
    100: { value: '#f5f5f5' },
    200: { value: '#e5e5e5' },
    300: { value: '#d4d4d4' },
    400: { value: '#a3a3a3' },
    500: { value: '#737373' },
    600: { value: '#525252' },
    700: { value: '#404040' },
    800: { value: '#262626' },
    900: { value: '#171717' },
  },
  white: { value: '#ffffff' },
  black: { value: '#000000' },
};

export const mainTheme: Config['theme'] = {
  tokens: {
    colors: defineTokens.colors(colorToken),
    sizes: defineTokens.sizes({
      navigator: { value: '65px' },
    }),
    spacing: defineTokens.spacing({
      '1x': { value: '4px' },
      '2x': { value: '8px' },
      '3x': { value: '12px' },
      '4x': { value: '16px' },
      '5x': { value: '20px' },
      '6x': { value: '24px' },
      '7x': { value: '28px' },
      '8x': { value: '32px' },
      '9x': { value: '36px' },
      '10x': { value: '40px' },
      navigator: { value: '65px' },
    }),
    zIndex: defineTokens.zIndex({
      navigator: { value: 60 },
      overlay: { value: 50 },
      pokeImage: { value: 1 },
      bottomSheet: { value: 70 },
      floatingActionButton: { value: 2 },
      searchBar: { value: 2 },
    }),
  },
  extend: {
    breakpoints,
    recipes: pandaRecipes,
    slotRecipes: pandaSlotRecipes,
    keyframes: pandaKeyframes,
  },
};
