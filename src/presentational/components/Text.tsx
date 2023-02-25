import { mainTheme } from '@/presentational/theme';

const Text = mainTheme.styled('p', {
  variants: {
    color: {
      white: {
        color: 'white',
      },
      black: {
        color: 'black',
      },
    },
    variant: {
      h1: {
        fontSize: 28,
      },
      h2: {
        fontSize: 24,
      },
      h3: {
        fontSize: 20,
      },
      h4: {
        fontSize: 16,
      },
      body1: {
        fontSize: 12,
      },
    },
  },
});

export default Text;

export const H1 = mainTheme.styled('h1', {
  fontSize: 24,
});

export const TextWhite = mainTheme.styled('p', {
  color: 'white',
});
