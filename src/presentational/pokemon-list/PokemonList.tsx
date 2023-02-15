import getConfig from 'next/config';
import Link from 'next/link';
import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import { AllPokemonsNameType } from '@/domains/pokemons/pokemonsService';
import { Center } from '@/presentational/components/Layout';
import PokemonCardHor from '@/presentational/components/PokemonCardHor';
import { mainTheme } from '@/presentational/theme';

type RowProps = {
  data: {
    pokemons: AllPokemonsNameType['pokemons']['results'];
  };
  index: number;
  style: CSSProperties;
};

const Row: FunctionComponent<RowProps> = (props) => {
  const { data, index, style } = props;
  const { pokemons } = data;
  const { publicRuntimeConfig } = getConfig();

  return (
    <ListItem style={style}>
      <Link href={`/detailed/${pokemons[index].id}`}>
        {pokemons[index] && (
          <PokemonCardHor
            id={pokemons[index].id}
            name={pokemons[index].name}
            image={publicRuntimeConfig.pokemonImageUrl.replace(
              '{id}',
              pokemons[index].id.toString(),
            )}
          />
        )}
      </Link>
    </ListItem>
  );
};

type PokemonList = {
  pokemons: AllPokemonsNameType['pokemons']['results'];
};

const PokemonList: FunctionComponent<PokemonList> = ({ pokemons }) => {
  const isNoPokemonFound = pokemons.length === 0;

  return isNoPokemonFound ? (
    <NoPokemonFoundWrapper />
  ) : (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          itemCount={pokemons.length}
          itemSize={200}
          itemData={{
            pokemons: pokemons,
          }}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
};

export default PokemonList;

const NoPokemonFoundWrapper = () => {
  return <NoPokemonFound>No Pokemon Found</NoPokemonFound>;
};

const NoPokemonFound = mainTheme.styled(Center, {
  width: '100%',
  height: '100%',
});

const ListItem = mainTheme.styled('div', {
  display: 'flex',
  width: '100%',
  margin: '10px 0px',
  justifyContent: 'center',
});
