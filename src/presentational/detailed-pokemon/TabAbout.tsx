import { FunctionComponent } from 'react';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import { ButtonOutline } from '@/presentational/components/Button';
import { Flex } from '@/presentational/components/Layout';
import Text from '@/presentational/components/Text';
import { styled } from '../panda-css/jsx';

type TabAboutProps = {
  height: number;
  weight: number;
  abilities: GetPokemonDetailByIdQuery['about'][0]['abilities'];
};

const TabAbout: FunctionComponent<TabAboutProps> = ({
  height,
  weight,
  abilities,
}) => {
  return (
    <>
      <TabBody>
        <TextContainer>
          <Label>Height</Label>
          <Text>{height}</Text>
        </TextContainer>
        <TextContainer>
          <Label>Weight</Label>
          <Text>{weight}</Text>
        </TextContainer>
        <TextContainer>
          <Label> Abilities</Label>
          <Data>
            {abilities.map((ability) => `${ability?.ability?.name}`).join(', ')}
            .
          </Data>
        </TextContainer>
      </TabBody>
      <Flex
        style={{
          width: '100%',
          padding: 12,
        }}
      >
        <ButtonOutline
          style={{
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <Text>Close</Text>
        </ButtonOutline>
      </Flex>
    </>
  );
};

export default TabAbout;

const TabBody = styled('div', {
  base: {
    height: '100%',
    width: '100%',
    padding: '10px',
  },
});

const TextContainer = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '30px',
  },
});

const Label = styled(Text, {
  base: {
    width: '30%',
  },
});

const Data = styled(Text, {
  base: {
    textTransform: 'capitalize',
  },
});
