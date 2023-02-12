import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { PokemonName } from '@/domains/ownedPokemon/ownedPokemonEntity';
import { useOwnedPokemonStore } from '@/domains/ownedPokemon/ownedPokemonStore';
import Card from '@/presentational/components/Card';
import PokemonCardVer from '@/presentational/components/PokemonCardVer';
import { mainTheme } from '@/presentational/theme';

const paddingX = 5;

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

const Container = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '380px',
  width: '100%',
});

const Center = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
});

const AutoSizerContainer = mainTheme.styled('div', {
  height: '100%',
  width: '100%',
  padding: '0px ${paddingX}px',
});

const EmptyContainer = mainTheme.styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '4px 0px',
});
