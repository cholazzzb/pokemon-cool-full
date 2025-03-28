import { cva } from '../panda-css/css';
import { Box, styled } from '../panda-css/jsx';

const skeletonStyle = cva({
  base: {
    background: 'gray.300',
    width: '100%',
    height: '20px',
    borderRadius: '20px',
    animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  variants: {
    size: {},
    shape: {
      circle: {
        borderRadius: 'full',
      },
    },
  },
  defaultVariants: {},
});

export const Skeleton = styled(Box, skeletonStyle);
