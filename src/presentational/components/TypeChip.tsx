import { FunctionComponent } from 'react';

import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { getSecondaryColorFromType } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';
import TypeIcon from './TypeIcon';

type TypeChipProps = {
  type: PokemonType;
};

const TypeChip: FunctionComponent<TypeChipProps> = ({ type }) => {
  const bgColor = getSecondaryColorFromType(type);

  const Chip = mainTheme.styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60px',
    padding: '8px',
    borderRadius: '12px',
    backgroundColor: `${bgColor}`,
    color: 'white',
    textAlign: 'center',
    fontSize: '10px',
    fontWeight: 700,
    lineHeight: '12px',
    textTransform: 'capitalize',
  });

  return (
    <Chip data-testid="typechip-label">
      <TypeIcon type={type} />
      <p>{type}</p>
    </Chip>
  );
};

export default TypeChip;
