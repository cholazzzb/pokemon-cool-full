import getConfig from 'next/config';
import Link from 'next/link';
import { CSSProperties, FunctionComponent } from 'react';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';

import { GetPokemonsByGensAndTypesQuery } from '@/__generated__/pokeapi/gql/graphql';
import { PokemonType } from '@/domains/pokemonType/pokemonTypeEntity';
import { useGetPokemonsByGensAndTypesQuery } from '@/domains/pokemons/pokemonsHook';
import { Center, Flex, YStack } from '@/presentational/components/Layout';
import PokemonCardHor from '@/presentational/components/PokemonCardHor';
import Skeleton from '@/presentational/components/Skeleton';
import { mainTheme } from '@/presentational/theme';

const { publicRuntimeConfig } = getConfig();

type RowProps = {
  data: {
    pokemons: GetPokemonsByGensAndTypesQuery['pokemons'];
  };
  index: number;
  style: CSSProperties;
};

const Row: FunctionComponent<RowProps> = (props) => {
  const { data, index, style } = props;
  const { pokemons } = data;

  const pokemonTypes = pokemons[index].pokemons[0].types.map(
    (poke) => (poke?.type?.name ?? 'normal') as PokemonType,
  );

  return (
    <ListItem style={style}>
      <Link href={`/detailed/${pokemons[index].id}`}>
        {pokemons[index] && (
          <PokemonCardHor
            id={pokemons[index].id}
            name={pokemons[index].name}
            pokemonTypes={pokemonTypes}
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

const pageSize = 21;

type PokemonList = {
  genIds: Array<number>;
  typeIds: Array<number>;
};

const PokemonList: FunctionComponent<PokemonList> = (props) => {
  const pokemonQuery = useGetPokemonsByGensAndTypesQuery({
    pageSize,
    genIds: props.genIds,
    typeIds: props.typeIds,
  });

  const isNoPokemonFound = pokemonQuery.flattenData.length === 0;

  if (pokemonQuery.isLoading) {
    return <LoadingList />;
  }

  return isNoPokemonFound ? (
    <NoPokemonFoundWrapper />
  ) : (
    <AutoSizer>
      {({ height, width }) => {
        return (
          // @ts-ignore Type error with List component from react-window
          <InfiniteLoader
            isItemLoaded={(index) => index < pokemonQuery.flattenData.length}
            itemCount={pokemonQuery.flattenData.length + 1}
            loadMoreItems={() => {
              if (pokemonQuery.isLoading) return;
              const numOfPage = pokemonQuery.data?.pages.length ?? 0;

              // case for last page
              if (pokemonQuery.data?.pages[numOfPage - 1].pokemons.length === 0)
                return;

              pokemonQuery.fetchNextPage({
                pageParam: {
                  page: numOfPage + 1,
                },
              });
            }}
          >
            {({ onItemsRendered, ref }) => (
              // @ts-ignore Type error with List component from react-window
              <List
                ref={ref}
                onItemsRendered={onItemsRendered}
                height={height}
                width={width}
                itemCount={pokemonQuery.flattenData.length}
                itemSize={200}
                itemData={{
                  pokemons: pokemonQuery.flattenData,
                }}
              >
                {(props) => <Row {...props} />}
              </List>
            )}
          </InfiniteLoader>
        );
      }}
    </AutoSizer>
  );
};

export default PokemonList;

function LoadingList() {
  return (
    <YStack
      css={{
        marginBlockStart: '$5',
        display: 'block',
        height: '100%',
        width: '100%',
      }}
    >
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <Flex
            key={`skeleton-${idx}`}
            css={{ justifyContent: 'center', width: '100%' }}
          >
            <Skeleton css={{ marginBlockEnd: 24 }} />
          </Flex>
        ))}
    </YStack>
  );
}

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
  margin: '0px 0px 10px 0px',
  justifyContent: 'center',
});
