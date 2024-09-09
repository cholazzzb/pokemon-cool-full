import { cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

export const textStyle = cva({
  base: {},
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
        fontSize: '28px',
        fontWeight: 800,
      },
      h2: {
        fontSize: '24px',
        fontWeight: 700,
      },
      h3: {
        fontSize: '20px',
      },
      h4: {
        fontSize: '16px',
      },
      body1: {
        fontSize: '12px',
      },
    },
  },
  defaultVariants: {
    variant: 'h4',
    color: 'white',
  },
});

const Text = styled('p', textStyle);

export default Text;
