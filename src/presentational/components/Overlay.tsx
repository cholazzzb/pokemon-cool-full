import { motion } from 'framer-motion';

import { mainTheme } from '@/presentational/theme';

export const Overlay = mainTheme.styled(motion.div, {
  zIndex: '$overlay',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(255,255,255,0.5)',
});
