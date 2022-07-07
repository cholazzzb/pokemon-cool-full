/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

import { Fragment, useState } from 'react';
import OwnedPokemonList from './OwnedPokemonList';
import CollectionList from './CollectionList';

import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';

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
  const { ownedPokemons } = useOwnedPokemonStore();
  const [activePokeName, setActivePokeName] = useState('');

  return (
    <div css={BodyStyle}>
      {Object.values(ownedPokemons).reduce(
        (acc, pokemons) => acc + pokemons.total,
        0,
      ) > 0 ? (
        <Fragment>
          {/* <PieChart data={PieChartDataDummy} /> */}
          <OwnedPokemonList
            selectPokemon={(selectedPokemon) => {
              setActivePokeName(selectedPokemon);
            }}
          />
        </Fragment>
      ) : (
        <div css={EmptyStyle}>You don&apos;t have any pokemon yet</div>
      )}
      {Object.keys(ownedPokemons).length > 0 && activePokeName.length > 0 && (
        <CollectionList
          activePokeName={activePokeName}
          updateActivePokeName={(activePokeName) =>
            setActivePokeName(activePokeName)
          }
        />
      )}
    </div>
  );
};

export default Ownedpage;
