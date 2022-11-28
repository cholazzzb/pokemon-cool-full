/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { PokemonName } from '@/domains/ownedPokemon/ownedPokemonEntity';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import Card from 'src/presentational/components/Card';
import PokemonCardVer from 'src/presentational/components/PokemonCardVer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 380px;
  width: 100%;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
`;

const paddingX = 5;

const AutoSizerContainer = styled.div`
  height: 100%;
  width: 100%;
  padding: 0px ${paddingX}px;
`;

const EmptyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 4px 0px;
`;

type RowProps = {
  data: {
    selectPokemon: (selectedPokemon: string) => void;
  };
  index: number;
  style: CSSProperties;
};
const Row: FunctionComponent<RowProps> = (props) => {
  const { data, index, style } = props;
  const { selectPokemon } = data;
  const { ownedPokemons } = useOwnedPokemonStore();
  const ownedPokemonsArr = Object.keys(ownedPokemons);
  return (
    <div onClick={() => selectPokemon(ownedPokemonsArr[index])} style={style}>
      <PokemonCardVer
        id={ownedPokemons[ownedPokemonsArr[index]].id}
        name={ownedPokemonsArr[index]}
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

type OwnedPokemonListProps = {
  selectPokemon: (selectedPokemon: PokemonName) => void;
};
const OwnedPokemonList: FunctionComponent<OwnedPokemonListProps> = ({
  selectPokemon,
}) => {
  const { ownedPokemons } = useOwnedPokemonStore();

  const numOfOwnedPokemons = Object.values(ownedPokemons).reduce(
    (acc, pokemons) => acc + pokemons.total,
    0,
  );

  return numOfOwnedPokemons > 0 ? (
    <Container>
      <Center>
        <Card headText="Your Owned Pokemon" bodyText="Click to see details" />
      </Center>
      <AutoSizerContainer>
        <AutoSizer>
          {({ height, width }) => (
            <List
              css={ListStyle}
              height={height}
              width={width - 2 * paddingX}
              itemCount={Object.values(ownedPokemons).length}
              itemSize={200}
              layout="horizontal"
              itemData={{
                selectPokemon: selectPokemon,
              }}
            >
              {Row}
            </List>
          )}
        </AutoSizer>
      </AutoSizerContainer>
    </Container>
  ) : (
    <EmptyContainer>You don&apos;t have any pokemon yet</EmptyContainer>
  );
};

export default OwnedPokemonList;
