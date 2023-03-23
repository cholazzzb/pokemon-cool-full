/**
 * FAB or Floating Action Button
 * only appear for mobile
 **/

import { ComponentProps } from 'react';

import { mainTheme } from '@/presentational/theme';

type FloatingActionButtonProps = ComponentProps<
  typeof FloatingActionButtonBase
> & {
  posIndex: number;
};

export default function FloatingActionButton({
  posIndex,
  ...props
}: FloatingActionButtonProps) {
  return (
    <FloatingActionButtonBase
      {...props}
      style={{
        bottom: 70 + (posIndex - 1) * 52,
      }}
    />
  );
}

const FloatingActionButtonBase = mainTheme.styled('div', {
  zIndex: '$floatingActionButton',
  position: 'absolute',
  right: 20,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: 'black',
  height: 24,
  width: 24,
  cursor: 'pointer',
  borderRadius: '50%',
  backgroundColor: '$primary100',
  color: 'white',
  variants: {
    size: {
      sm: {
        height: 32,
        width: 32,
      },
      md: {
        height: 36,
        width: 36,
      },
      lg: {
        height: 40,
        width: 40,
      },
    },
  },
  '@md': {
    display: 'none',
  },
});
