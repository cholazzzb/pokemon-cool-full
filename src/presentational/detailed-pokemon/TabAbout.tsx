import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import { ButtonOutline } from '@/presentational/components/Button';
import { Flex } from '@/presentational/components/Layout';
import { TextWhite } from '@/presentational/components/Text';
import { mainTheme } from '@/presentational/theme';

type TabAboutProps = {
  height: number;
  weight: number;
  abilities: Array<{ ability: Omit<BaseName, 'id'> }>;
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
          <TextWhite>{height}</TextWhite>
        </TextContainer>
        <TextContainer>
          <Label>Weight</Label>
          <TextWhite>{weight}</TextWhite>
        </TextContainer>
        <TextContainer>
          <Label> Abilities</Label>
          <Data>
            {abilities
              .map(
                (ability: { [key: string]: { [key: string]: string } }) =>
                  `${ability.ability.name}`,
              )
              .join(', ')}
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
          <TextWhite>Close</TextWhite>
        </ButtonOutline>
      </Flex>
    </>
  );
};

export default TabAbout;

const TabBody = mainTheme.styled('div', {
  height: '100%',
  width: '100%',
  padding: '10px',
});

const TextContainer = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '30px',
});

const Label = mainTheme.styled(TextWhite, {
  width: '30%',
});

const Data = mainTheme.styled(TextWhite, {
  textTransform: 'capitalize',
});
