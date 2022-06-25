/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from "@emotion/react";
import { Dispatch, FC, SetStateAction, useContext } from "react";
import PokemonCardVer from "../PokemonCardVer";
import Card from "@components/Card";
import {
  OwnedPokemonContext,
  OwnedPokemonContextType,
} from "@context/OwnedPokemonContext";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

interface IRowProps {
  data: any;
  index: number;
  style: any;
}
const Row: FC<IRowProps> = (props) => {
  const { data, index, style } = props;
  const { ownedPokemon, setActivePokeIdx } = data;
  return (
    <div onClick={() => setActivePokeIdx(index)} style={style}>
      <PokemonCardVer
          id= {ownedPokemon[index].id}
          name= {ownedPokemon[index].name}
      />
    </div>
  );
};

const ListStyle = css`
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

interface IOwnedPokemonListProps {
  setActivePokeIdx: Dispatch<SetStateAction<number | null>>;
}
const OwnedPokemonList: FC<IOwnedPokemonListProps> = (props) => {
  const { setActivePokeIdx } = props;
  const { ownedPokemon, savePokemon, releasePokemon } = useContext(
    OwnedPokemonContext
  ) as OwnedPokemonContextType;

  return (
    <div style={{ height: "50%", padding:"10px"}}>
      <Card
        headText="Your Owned Pokemon"
        bodyText="Click to see details"
      />

      <AutoSizer>
        {({ height, width }) => (
          <List
            css={ListStyle}
            height={height}
            width={width}
            itemCount={ownedPokemon.length}
            itemSize={200}
            layout="horizontal"
            itemData={{
              ownedPokemon: ownedPokemon,
              setActivePokeIdx: setActivePokeIdx,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default OwnedPokemonList;
