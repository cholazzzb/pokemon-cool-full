import { cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

const buttonStyle = cva({
  base: {
    cursor: 'pointer',
    height: '44px',
    minWidth: '120px',
    paddingInline: '5x',
    borderRadius: '8px',
    border: 'solid 1px',
    borderColor: 'gray',
  },

  variants: {
    color: {
      primary: {
        borderColor: 'primary.500',
        backgroundColor: 'primary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'primary.400',
        },
      },
      secondary: {
        borderColor: 'secondary.500',
        backgroundColor: 'secondary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'secondary.400',
        },
      },
      tertiary: {
        borderColor: 'tertiary.500',
        backgroundColor: 'tertiary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'tertiary.400',
        },
      },
    },
    size: {
      lg: {
        fontSize: '16px',
        padding: '16px 24px',
        borderRadius: '8px',
        md: {
          fontSize: '18px',
          padding: '20px 32px',
        },
      },
      md: {
        fontSize: '14px',
        padding: '12px 20px',
        borderRadius: '6px',
        md: {
          fontSize: '16px',
          padding: '16px 24px',
        },
      },
      sm: {
        fontSize: '12px',
        padding: '8px 16px',
        borderRadius: '4px',
        md: {
          fontSize: '14px',
          padding: '10px 20px',
        },
      },
    },
    outline: {
      true: {},
    },
    ghost: {
      true: {},
    },
  },
  compoundVariants: [
    {
      outline: true,
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'primary.500',
        color: 'primary.500',
        _hover: {
          backgroundColor: 'primary.50',
          borderColor: 'primary.600',
          color: 'primary.600',
        },
      },
    },
    {
      outline: true,
      color: 'secondary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'secondary.500',
        color: 'secondary.500',
        _hover: {
          backgroundColor: 'secondary.50',
          borderColor: 'secondary.600',
          color: 'secondary.600',
        },
      },
    },
    {
      outline: true,
      color: 'tertiary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'tertiary.500',
        color: 'tertiary.500',
        _hover: {
          backgroundColor: 'tertiary.50',
          borderColor: 'tertiary.600',
          color: 'tertiary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'primary.500',
        _hover: {
          backgroundColor: 'primary.50',
          color: 'primary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'secondary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'secondary.500',
        _hover: {
          backgroundColor: 'secondary.50',
          color: 'secondary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'tertiary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        color: 'tertiary.500',
        _hover: {
          backgroundColor: 'tertiary.50',
          color: 'tertiary.600',
        },
      },
    },
  ],
  defaultVariants: { color: 'primary' },
});
const Button = styled('button', buttonStyle);

export default Button;

const circleButtonStyle = cva({
  base: {
    cursor: 'pointer',
    height: '44px',
    width: '44px',
    paddingInline: '1x',
    borderRadius: '22px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    lg: {
      fontSize: '16px',
      width: '56px',
      height: '56px',
      padding: '16px',
      borderRadius: '28px',
    },
    md: {
      fontSize: '14px',
      width: '48px',
      height: '48px',
      padding: '14px',
      borderRadius: '24px',
    },
    sm: {
      fontSize: '12px',
      width: '44px',
      height: '44px',
      padding: '12px',
      borderRadius: '22px',
    },
  },
  variants: {
    color: {
      primary: {
        borderColor: 'primary.500',
        backgroundColor: 'primary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'primary.400',
        },
      },
      secondary: {
        borderColor: 'secondary.500',
        backgroundColor: 'secondary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'secondary.400',
        },
      },
      tertiary: {
        borderColor: 'tertiary.500',
        backgroundColor: 'tertiary.500',
        color: 'white',
        _hover: {
          color: 'white',
          backgroundColor: 'tertiary.400',
        },
      },
    },
    outline: {
      true: {},
    },
    ghost: {
      true: {},
    },
  },
  compoundVariants: [
    {
      outline: true,
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'primary.500',
        color: 'primary.500',
        _hover: {
          backgroundColor: 'primary.50',
          borderColor: 'primary.600',
          color: 'primary.600',
        },
      },
    },
    {
      outline: true,
      color: 'secondary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'secondary.500',
        color: 'secondary.500',
        _hover: {
          backgroundColor: 'secondary.50',
          borderColor: 'secondary.600',
          color: 'secondary.600',
        },
      },
    },
    {
      outline: true,
      color: 'tertiary',
      css: {
        backgroundColor: 'transparent',
        borderColor: 'tertiary.500',
        color: 'tertiary.500',
        _hover: {
          backgroundColor: 'tertiary.50',
          borderColor: 'tertiary.600',
          color: 'tertiary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'primary',
      css: {
        backgroundColor: 'primary.50',
        borderColor: 'transparent',
        color: 'primary.500',
        _hover: {
          backgroundColor: 'primary.100',
          color: 'primary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'secondary',
      css: {
        backgroundColor: 'secondary.50',
        borderColor: 'transparent',
        color: 'secondary.500',
        _hover: {
          backgroundColor: 'secondary.100',
          color: 'secondary.600',
        },
      },
    },
    {
      ghost: true,
      color: 'tertiary',
      css: {
        backgroundColor: 'tertiary.50',
        borderColor: 'transparent',
        color: 'tertiary.500',
        _hover: {
          backgroundColor: 'tertiary.100',
          color: 'tertiary.600',
        },
      },
    },
  ],
  defaultVariants: { color: 'primary' },
});
export const CircleButton = styled('button', circleButtonStyle);
