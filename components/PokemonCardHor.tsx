/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

import PokeImage from "./PokeImage";
import TypeChip from "./TypeChip";
import { getPrimaryColorFromType } from "../utils/colorTheme";
import useQueryPokeType from "@hooks/API/useQueryPokeType";

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

interface IPokemonCardHorProps {
  id: string;
  name: string;
}

const PokemonCardHor: FC<IPokemonCardHorProps> = (props) => {
  const { id, name } = props;

  const { loading, error, data } = useQueryPokeType(name);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

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
        id={parseInt(id)}
        size={75}
      />
    </div>
  );
};

export default PokemonCardHor;
