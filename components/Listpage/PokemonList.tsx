/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";
import PokemonCardHor from "@components/PokemonCardHor";
import { DETAILPAGE } from "@constants/route";

import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";

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

const ListItemStyle = css`
  display: flex;
  width: 100%;
  margin: 10px 0px;
  justify-content: center;
`;

interface IRowProps {
  data: any;
  index: number;
  style: any;
}

const Row: FC<IRowProps> = (props) => {
  const { data, index, style } = props;
  const { pokemons, setCurrentPage, setCurrentId } = data;

  const handleClick = () => {
    setCurrentPage(DETAILPAGE);
    setCurrentId(pokemons[index].id);
  };

  return (
    <div onClick={handleClick} css={ListItemStyle} style={style}>
      {pokemons[index] && (
        <PokemonCardHor id={pokemons[index].id} name={pokemons[index].name} />
      )}
    </div>
  );
};

interface IPokemonList {
  pokemons: any[];
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setCurrentId: Dispatch<SetStateAction<number>>;
}

const PokemonList: FC<IPokemonList> = (props) => {
  const { pokemons, setCurrentPage, setCurrentId } = props;

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          css={ListStyle}
          height={height}
          width={width}
          itemCount={pokemons.length}
          itemSize={200}
          itemData={{
            pokemons: pokemons,
            setCurrentPage: setCurrentPage,
            setCurrentId: setCurrentId,
          }}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default PokemonList;
