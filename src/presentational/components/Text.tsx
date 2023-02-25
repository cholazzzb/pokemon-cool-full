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
        fontWeight: 800,
      },
      h2: {
        fontSize: 24,
        fontWeight: 700,
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
  defaultVariants: {
    variant: 'h4',
    color: 'white',
  },
});

export default Text;
