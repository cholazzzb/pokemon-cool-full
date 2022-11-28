/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import getConfig from 'next/config';
import Link from 'next/link';
import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';

import PokemonCardHor from '@/components/PokemonCardHor';
import { AllPokemonsNameType } from '@/domains/pokemons/pokemonsService';
import { Center } from 'src/presentational/components/Layout';
import { mainTheme } from 'src/presentational/theme';

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
    <div css={ListItemStyle} style={style}>
      <Link href={`/detailed/${pokemons[index].id}`}>
        <a style={{ textDecoration: 'none' }}>
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
        </a>
      </Link>
    </div>
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
          css={ListStyle}
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
