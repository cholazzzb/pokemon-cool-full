import { cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

export const ButtonOutline = styled('button', {
  base: {
    padding: '3x',
    borderRadius: '2x',
    border: 'solid 4px white',
  },
});

const buttonStyle = cva({
  base: {
    cursor: 'pointer',
    height: '44px',
    paddingInline: '5x',
    borderRadius: '12px',
    border: 'solid 1px',
    borderColor: 'gray',
    backgroundColor: 'white',
    _hover: {
      color: 'primary.100',
      borderColor: 'primary.100',
    },
  },

  variants: {
    variant: {
      primary: {
        borderColor: 'primary.100',
        backgroundColor: 'primary.100',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'primary.90',
        },
      },
      secondary: {
        color: 'black',
      },
      danger: {
        borderColor: 'red.100',
        backgroundColor: 'red.100',
        color: 'white',
        _hover: {
          borderColor: 'red.100',
          backgroundColor: 'red.90',
          color: 'white',
        },
      },
    },
    size: {
      lg: {},
      md: {},
      sm: {},
    },
  },
  defaultVariants: { variant: 'secondary' },
});
const Button = styled('button', buttonStyle);

export default Button;
