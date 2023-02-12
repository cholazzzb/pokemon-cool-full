import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
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
    <TabBody>
      <TextContainer>
        <Label>Height</Label>
        {height}
      </TextContainer>
      <TextContainer>
        <Label>Weight</Label>
        {weight}
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
  );
};

export default TabAbout;

const TabBody = mainTheme.styled('div', {
  height: '100%',
  padding: '10px',
});

const TextContainer = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  height: '30px',
});

const Label = mainTheme.styled('p', {
  color: 'gray',
  width: '30%',
});

const Data = mainTheme.styled('p', {
  textTransform: 'capitalize',
});
