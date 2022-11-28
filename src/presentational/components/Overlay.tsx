import { mainTheme } from '../theme';

export const Overlay = mainTheme.styled('div', {
  zIndex: 50,
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});
