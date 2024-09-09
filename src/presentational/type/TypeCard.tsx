import { VStack, styled } from '../panda-css/jsx';

const TypeCard = styled(VStack, {
  base: {
    maxWidth: '100%',
    borderRadius: 30,
    padding: 30,
    marginBlockEnd: 30,
    backgroundColor: 'white',
  },
});

export default TypeCard;

export const EffectivityText = styled('p', {
  base: {
    width: '100%',
    textAlign: 'center',
    marginBlockEnd: 20,
  },
});
