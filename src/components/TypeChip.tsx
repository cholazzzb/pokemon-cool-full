/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';
import TypeIcon from './TypeIcon';
import { getSecondaryColorFromType } from '@/utils/colorTheme';
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';

type TypeChipProps = {
  type: PokemonType;
};

const TypeChip: FC<TypeChipProps> = ({ type }) => {
  const bgColor = getSecondaryColorFromType(type);

  const ChipStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    padding: 8px;
    border-radius: 12px;
    background-color: ${bgColor};
    color: white;
    text-align: center;
    font-size: 10px;
    font-weight: 700;
    line-height: 12px;
    text-transform: capitalize;
  `;

  return (
    <div data-testid="typechip-label" css={ChipStyle}>
      <TypeIcon type={type} />
      {type}
    </div>
  );
};

export default TypeChip;
