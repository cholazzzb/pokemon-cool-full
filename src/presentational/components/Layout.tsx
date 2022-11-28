import { mainTheme } from '../theme';

export const Flex = mainTheme.styled('div', {
  display: 'flex',
});

export const Center = mainTheme.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const Layout = mainTheme.styled('div', {
  height: '100vh',
  maxWidth: '420px',
  margin: '0 auto',
  borderRadius: '20px',
  border: '4px solid #e7e7ef',
  display: 'flex',
  flexDirection: 'column',
});
