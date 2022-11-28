import { mainTheme } from '../theme';

export const Flex = mainTheme.styled('div', {
  display: 'flex',
});

export const Center = mainTheme.styled(Flex, {
  justifyContent: 'center',
  alignItems: 'center',
});
