import { YStack } from '@/presentational/components/Layout';
import { mainTheme } from '@/presentational/theme';

const TypeCard = mainTheme.styled(YStack, {
  maxWidth: '100%',
  borderRadius: 30,
  padding: 30,
  marginBlockEnd: 30,
  backgroundColor: 'white',
});

export default TypeCard;

export const EffectivityText = mainTheme.styled('p', {
  width: '100%',
  textAlign: 'center',
  marginBlockEnd: 20,
});
