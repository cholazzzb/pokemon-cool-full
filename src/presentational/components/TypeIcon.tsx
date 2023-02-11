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
import { FunctionComponent } from 'react';

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
};

const TypeIcon: FunctionComponent<TypeIconProps> = (props) => {
  const { type } = props;

  const icon = icons.get(type);

  return (
    <TypeIconWrapper data-testid="typeicon">
      {icon && <FontAwesomeIcon icon={icon} />}
    </TypeIconWrapper>
  );
};

export default TypeIcon;

const TypeIconWrapper = mainTheme.styled('span', {
  display: 'flex',
  width: '10px',
  height: '10px',
  padding: '2px',
  justifyContent: 'center',
  alignItems: 'center',
});
