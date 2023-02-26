import {
  faBolt,
  faBomb,
  faBug,
  faCircle,
  faDiceD6,
  faDragon,
  faFeather,
  faFire,
  faFistRaised,
  faGhost,
  faHeart,
  faKiss,
  faLeaf,
  faMoon,
  faSkullCrossbones,
  faSnowflake,
  faTint,
  faUmbrellaBeach,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ComponentProps, FunctionComponent } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { mainTheme } from '@/presentational/theme';

const icons: Map<PokemonType, IconDefinition> = new Map([
  ['normal', faCircle],
  ['fire', faFire],
  ['fighting', faFistRaised],
  ['water', faTint],
  ['flying', faFeather],
  ['grass', faLeaf],
  ['poison', faSkullCrossbones],
  ['electric', faBolt],
  ['ground', faUmbrellaBeach],
  ['psychic', faHeart],
  ['rock', faBomb],
  ['ice', faSnowflake],
  ['bug', faBug],
  ['dragon', faDragon],
  ['ghost', faGhost],
  ['dark', faMoon],
  ['steel', faDiceD6],
  ['fairy', faKiss],
]);

type TypeIconProps = {
  type: PokemonType;
  size?: number;
} & ComponentProps<typeof TypeIconWrapper>;

const TypeIcon: FunctionComponent<TypeIconProps> = (props) => {
  const icon = icons.get(props.type);

  return (
    <TypeIconWrapper
      css={{
        width: props.size,
        height: props.size,
      }}
      data-testid="typeicon"
      {...props}
    >
      {icon && <PokemonIcon icon={icon} />}
    </TypeIconWrapper>
  );
};

export default TypeIcon;

const TypeIconWrapper = mainTheme.styled('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 12,
  height: 12,
  '@md': {
    width: 16,
    height: 16,
  },
  '@lg': {
    width: 20,
    height: 20,
  },
});

const PokemonIcon = mainTheme.styled(FontAwesomeIcon, {
  color: 'white',
  width: 12,
  height: 12,
  '@md': {
    width: 16,
    height: 16,
  },
  '@lg': {
    width: 20,
    height: 20,
  },
});
