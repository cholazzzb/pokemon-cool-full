/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { FC } from 'react';
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
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';

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

const TypeIcon: FC<TypeIconProps> = (props) => {
  const { type } = props;

  const icon = icons.get(type);

  return (
    <span
      css={css`
        display: flex;
        width: 10px;
        height: 10px;
        padding: 2px;
        justify-content: center;
        align-items: center;
      `}
      data-testid="typeicon"
    >
      {icon && <FontAwesomeIcon icon={icon} />}
    </span>
  );
};

export default TypeIcon;
