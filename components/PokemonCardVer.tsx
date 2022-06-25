/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";
import TypeChip from "./TypeChip";
import PokeImage from "./PokeImage";
import { getPrimaryColorFromType } from "@utils/colorTheme";
import useQueryPokeType from "@hooks/API/useQueryPokeType";

const NameStyle = css`
  font-size: 15px;
  font-weight: 700;
  line-height: 1px;
  text-transform: capitalize;
`;

interface IPokemonCardVerProps {
  id: number;
  name: string;
}

const PokemonCardVer: FC<IPokemonCardVerProps> = (props) => {
  const { id, name } = props;

  const { loading, error, data } = useQueryPokeType(name);

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;

  const type = data.pokemon.types[0].type.name;
  const bgColor = getPrimaryColorFromType(type);
  const CardStyle = css`
    display: flex;
    flex-direction: column;
    width: 160px;
    height: 220px;
    background-color: ${bgColor};
    color: white;
    padding: 20px 0px 0px 22px;
    margin: 10px 0px;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  `;
  return (
    <div css={CardStyle}>
      <p css={NameStyle}>{name}</p>
      <div
        css={css`
          display: flex;
        `}
      >
        {data &&
          data.pokemon.types.map((type: any, idx: number) => (
            <TypeChip key={idx} type={type.type.name} />
          ))}
      </div>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <PokeImage type={data.pokemon.types[0].type.name} id={id} size={75} />
      </div>
    </div>
  );
};
export default PokemonCardVer;
