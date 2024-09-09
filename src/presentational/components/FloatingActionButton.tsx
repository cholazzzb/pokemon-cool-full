/**
 * FAB or Floating Action Button
 * only appear for mobile
 **/
import { ComponentProps } from 'react';

import { RecipeVariantProps, cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

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

const floatingActionButtonStyle = cva({
  base: {
    zIndex: 'floatingActionButton',
    position: 'absolute',
    right: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    height: '24px',
    width: '24xpx',
    cursor: 'pointer',
    borderRadius: '50%',
    backgroundColor: 'primary.100',
    color: 'white',
    md: {
      display: 'none',
    },
  },
  variants: {
    size: {
      sm: {
        height: '32px',
        width: '32px',
      },
      md: {
        height: '36px',
        width: '36px',
      },
      lg: {
        height: '40px',
        width: '40px',
      },
    },
  },
});

export type FloatingActionButtonVariants = RecipeVariantProps<
  typeof floatingActionButtonStyle
>;
const FloatingActionButtonBase = styled('div', floatingActionButtonStyle);
