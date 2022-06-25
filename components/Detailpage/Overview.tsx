/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { Dispatch, FC, SetStateAction } from "react";
import PokeImage from "@components/PokeImage";
import TypeChip from "@components/TypeChip";
import NavigateOverview from "./NavigateOverview";
import CatchPokemon from "./CatchPokemon";
import { getSecondaryColorFromType } from "@utils/colorTheme";

const InformationStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NameStyle = css`
  font-size: 30px;
  font-weight: 700;
  line-height: 1px;
  text-transform: capitalize;
  padding: 0px 20px 10px 20px;
`;

const TypesStyle = css`
  display: flex;
  padding: 0px 20px 10px 20px;
`;

const ImageStyle = css`
  display: flex;
  justify-content: center;
  height: 200px;
`;

const IdStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

const OverviewStyle = css`
  color: white;
`;

interface OverviewProps {
  id: number;
  setCurrentId: Dispatch<SetStateAction<number>>;
  currentName: string;
  types: any;
}

const Overview: FC<OverviewProps> = (props) => {
  const { id, setCurrentId, currentName, types } = props;
  const seconColor = getSecondaryColorFromType(types[0].type.name);

  return (
    <div css={OverviewStyle}>
      <div
        css={css`
          position: relative;
        `}
      >
        <div css={InformationStyle}>
          <div>
            <p css={NameStyle}>{currentName}</p>
            <div css={TypesStyle}>
              {types.map((type: any) => (
                <TypeChip key={type.type.name} type={type.type.name} />
              ))}
            </div>
          </div>
          <p css={IdStyle}>#{id}</p>
        </div>
        <div css={ImageStyle}>
          <PokeImage type={types[0].type.name} id={id} size={200} />
        </div>
        <NavigateOverview currentId={id} setCurrentId={setCurrentId} />
      </div>
      <CatchPokemon id={id} iconColor={seconColor} pokemonName={currentName} />
    </div>
  );
};

export default Overview;
