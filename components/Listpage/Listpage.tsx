/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { FC, Dispatch, SetStateAction } from "react";

import Header from "@components/Header";
import PokemonList from "./PokemonList";

const ListPageStyle = css`
  padding: 0px 10px 65px 10px;
  height: 100%;
`;

interface IListPage {
  pokemons: any[];
  setCurrentPage: Dispatch<SetStateAction<string>>;
  setCurrentId: Dispatch<SetStateAction<number>>;
}

const Listpage: FC<IListPage> = (props) => {
  const { pokemons, setCurrentPage, setCurrentId } = props;

  return (
    <div css={ListPageStyle}>
      <Header caption="Pokemon List" />
      <PokemonList
        pokemons={pokemons}
        setCurrentPage={setCurrentPage}
        setCurrentId={setCurrentId}
      />
    </div>
  );
};

export default Listpage;
