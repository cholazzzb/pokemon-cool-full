import { motion } from 'framer-motion';

import { mainTheme } from '@/presentational/theme';

export const TagItem = mainTheme.styled(motion.div, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingInline: '$3',
  borderRadius: 8,
  width: 96,
  height: 32,
  '@md': {
    width: 100,
    height: 32,
  },
  '@lg': {
    width: 104,
    height: 32,
  },
});
