import { mainTheme } from '@/presentational/theme';

export const Overlay = mainTheme.styled('div', {
  zIndex: '$overlay',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
