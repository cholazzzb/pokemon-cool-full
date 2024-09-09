import { motion } from 'framer-motion';

import { styled } from '@/presentational/panda-css/jsx';

export const TagItem = styled(motion.div, {
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: '3x',
    borderRadius: '8px',
    width: '96px',
    height: '32px',
    md: {
      width: '100px',
      height: '32px',
    },
    lg: {
      width: '104px',
      height: '32px',
    },
  },
});
