import { motion } from 'framer-motion';

import { mainTheme } from '@/presentational/theme';

export const Flex = mainTheme.styled(motion.div, {
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

export const XScrollable = mainTheme.styled(Flex, {
  overflowX: 'scroll',
});

export const YScrollable = mainTheme.styled(YStack, {
  height: '100%',
  overflowY: 'scroll',
});

export const Layout = mainTheme.styled('div', {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  maxWidth: '640px', // media sm = 640px
  '@md': {
    maxWidth: '100%',
    borderInline: '4px solid #e7e7ef',
    flexDirection: 'row-reverse',
  },
});

export const RightPane = mainTheme.styled('div', {
  display: 'flex',
  width: '0%',
  '@md': {
    width: '100%',
  },
});

export const Body = mainTheme.styled(YScrollable, {
  width: '100%',
  paddingBlockEnd: '65px', // Navigator height 65px
  '@md': {
    paddingBlockEnd: 'initial',
    borderLeft: 'solid 4px #f2f3f5',
    borderRight: 'solid 4px #f2f3f5',
  },
});

export const BottomSheet = mainTheme.styled(YStack, {
  backgroundColor: 'white',
  height: '100%',
  width: '100%',
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  paddingBlockStart: 60,
  marginBlockEnd: 65, // Navigator height 65px
});
