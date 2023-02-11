import { mainTheme } from '@/presentational/theme';

export const Flex = mainTheme.styled('div', {
  display: 'flex',
});

export const Center = mainTheme.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const YStack = mainTheme.styled(Flex, {
  flexDirection: 'column',
});

export const Layout = mainTheme.styled('div', {
  height: '100vh',
  margin: '0 auto',
  borderRadius: '20px',
  border: '4px solid #e7e7ef',
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '420px',
  '@md': {
    maxWidth: '100%',
    flexDirection: 'row-reverse',
  },
});

export const RightPane = mainTheme.styled('div', {
  display: 'none',
  '@md': {
    display: 'flex',
    width: '100%',
  },
});
