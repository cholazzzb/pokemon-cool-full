import { mainTheme } from '@/presentational/theme';

export const Flex = mainTheme.styled('div', {
  display: 'flex',
});

export const FlexWrap = mainTheme.styled(Flex, {
  flexWrap: 'wrap',
});

export const Center = mainTheme.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});

export const YStack = mainTheme.styled(Flex, {
  flexDirection: 'column',
});

export const YScrollable = mainTheme.styled(YStack, {
  height: '100%',
  overflowY: 'scroll',
});

export const Layout = mainTheme.styled('div', {
  height: '100vh',
  borderInline: '4px solid #e7e7ef',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '640px', // media sm = 640px
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

export const Body = mainTheme.styled(YScrollable, {
  width: '100%',
});
