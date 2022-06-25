/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { Fragment, useContext, useState } from "react";
import OwnedPokemonList from "./OwnedPokemonList";
import CollectionList from "./CollectionList";

import {
  OwnedPokemonContext,
  OwnedPokemonContextType,
} from "@context/OwnedPokemonContext";

const PieChartDataDummy = [
  {
    name: "bulbasaur",
    imgURL: "",
    attributes: [{ name: "BOBI" }, { name: "BOBA" }],
  },
  {
    name: "chimcar",
    imgURL: "",
    attributes: [{ name: "BOBI" }],
  },
  {
    name: "geodude",
    imgURL: "",
    attributes: [{ name: "BOBI" }],
  },
];

const EmptyStyle = css`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 4px 0px;
`;

const BodyStyle = css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-bottom: 200px
  overflow: auto;
  margin: 0 0 65px 0;

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

const Ownedpage = () => {
  const { ownedPokemon, savePokemon, releasePokemon } = useContext(
    OwnedPokemonContext
  ) as OwnedPokemonContextType;
  const [activePokeIdx, setActivePokeIdx] = useState<number | null>(null);

  return (
    <div css={BodyStyle}>
      {ownedPokemon?.length > 0 ? (
        <Fragment>
          {/* <PieChart data={PieChartDataDummy} /> */}
          <OwnedPokemonList setActivePokeIdx={setActivePokeIdx} />
        </Fragment>
      ) : (
        <div css={EmptyStyle}>You don't have any pokemon yet</div>
      )}
      {ownedPokemon?.length > 0 && typeof activePokeIdx === "number" && (
        <CollectionList
          activePokeIdx={activePokeIdx}
          setActivePokeIdx={setActivePokeIdx}
        />
      )}
    </div>
  );
};

export default Ownedpage;
