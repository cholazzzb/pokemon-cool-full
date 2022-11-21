/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';

import { usePokeType } from '@/domains/pokemon/pokemonHook';
import { getPrimaryColorFromType } from '@/utils/colorTheme';
import PokeImage from './PokeImage';
import TypeChip from './TypeChip';

const NameStyle = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 1px;
  text-transform: capitalize;
`;

const AttributeStyle = css`
  display: flex;
  flex-direction: column;
`;

const PokemonCardHorLoading = styled.div`
  min-width: 200px;
  max-width: 300px;
  height: 150px;
  border-radius: 24px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  background-size: 200% 100%;
  animation: shine 1.5s linear infinite;
`;

interface IPokemonCardHorProps {
  name: string;
  image: string;
}

const PokemonCardHor: FC<IPokemonCardHorProps> = (props) => {
  const { name, image } = props;

  const { loading, error, data } = usePokeType(name);

  if (loading) return <PokemonCardHorLoading />;
  if (error) return <div>Error</div>;
  if (!data) return <div>No Data</div>;

  const type = data.pokemon.types[0].type.name;
  const bgColor = getPrimaryColorFromType(type);
  const CardStyle = css`
    min-width: 200px;
    max-width: 300px;
    height: 150px;
    background-color: ${bgColor};
    color: white;
    padding: 20px 0px 0px 22px;
    margin: 10px 0px;
    border-radius: 24px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  `;

  return (
    <div css={CardStyle}>
      <div css={AttributeStyle}>
        <p css={NameStyle}>{name}</p>
        {data &&
          data.pokemon.types.map((type: any, idx: number) => (
            <TypeChip key={idx} type={type.type.name} />
          ))}
      </div>
      <PokeImage
        type={data.pokemon.types[0].type.name}
        size={75}
        image={image}
      />
    </div>
  );
};

export default PokemonCardHor;
