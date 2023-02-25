import { mainTheme } from '@/presentational/theme';

export const TagItem = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingInline: '$3',
  borderRadius: 8,
  width: 84,
  height: 32,
  '@md': {
    width: 88,
    height: 32,
  },
  '@lg': {
    width: 92,
    height: 32,
  },
});
