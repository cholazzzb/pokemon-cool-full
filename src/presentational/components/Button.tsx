import { mainTheme } from '@/presentational/theme';

export const ButtonOutline = mainTheme.styled('button', {
  padding: 12,
  borderRadius: 8,
  border: 'solid 4px white',
});

const Button = mainTheme.styled('button', {
  cursor: 'pointer',
  height: 44,
  paddingInline: '$5',
  borderRadius: 12,
  border: 'solid 1px',
  borderColor: '$gray',
  backgroundColor: 'white',
  '&:hover': {
    color: '$primary100',
    borderColor: '$primary100',
  },
  variants: {
    variant: {
      primary: {
        borderColor: '$primary100',
        backgroundColor: '$primary100',
        color: 'white',
        '&:hover': {
          color: 'white',
          backgroundColor: '$primary90',
        },
      },
      secondary: {
        color: 'black',
      },
      danger: {
        borderColor: '$red100',
        backgroundColor: '$red100',
        color: 'white',
        '&:hover': {
          borderColor: '$red100',
          backgroundColor: '$red90',
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

export default Button;
