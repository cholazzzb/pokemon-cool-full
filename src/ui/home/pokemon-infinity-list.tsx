'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { Virtuoso } from 'react-virtuoso';

import { GetPokemonsByGensAndTypesQuery } from '@/__generated__/pokeapi/gql/graphql';
import { HomeQueryParams } from '@/app/param';
import { PokemonType } from '@/logic/pokemon/entity';
import {
  getPokemonsByGensAndTypes,
  PokemonsGQLQueryKey,
} from '@/logic/pokemon/service.gql';
import { useSafeParams } from '@/shared-logic/hooks/useSafeParams';
import { Show } from '@/shared-ui/component/flow';
import { css } from '@/shared-ui/panda-css/css';
import { Flex } from '@/shared-ui/panda-css/jsx';
import { PokemonCard } from './pokemon-card';
import { SkeletonPokemonList } from './skeleton-pokemon-list';

export function PokemonInfinityList() {
  const { typeIds, genIds } = useSafeParams<HomeQueryParams>({
    // All Pokemons Type is 1,2,3,...18
    typeIds: Array(18)
      .fill(0)
      .map((_, idx) => `${idx + 1}`),
    genIds: ['1', '2'],
  });

  const infiniteQuery = useInfiniteQuery({
    queryKey: PokemonsGQLQueryKey.getList({
      typeIds: typeIds,
      genIds: genIds,
    }),
    queryFn: ({ pageParam }) =>
      getPokemonsByGensAndTypes({
        typeIds: typeIds.map((ti) => Number(ti)),
        genIds: genIds.map((gi) => Number(gi)),
        limit: 20,
        offset: pageParam * 20,
      }),
    initialPageParam: 0,
    getNextPageParam: (_, pages) => {
      return pages.length;
    },
  });

  const listPokemons = useMemo(() => {
    const data: GetPokemonsByGensAndTypesQuery['pokemons'] = [];

    for (
      let page = 0;
      (infiniteQuery?.data?.pages?.length ?? 0) > page;
      page++
    ) {
      const arrData = infiniteQuery?.data?.pages[page]!.pokemons ?? [];
      data.push(...arrData);
    }

    return data;
  }, [infiniteQuery.data?.pages]);

  if (infiniteQuery.isLoading) {
    return <SkeletonPokemonList />;
  }

  return (
    <Virtuoso
      className={css({
        height: '100%',
        width: '100%',
        backgroundColor: 'gray.100',
        paddingBlockEnd: {
          base: 'navigator',
          md: 'initial',
        },
      })}
      totalCount={Math.ceil(listPokemons.length / 2)}
      endReached={() => {
        void infiniteQuery.fetchNextPage();
      }}
      increaseViewportBy={200}
      itemContent={(index) => {
        const pokemonLeft = listPokemons[2 * index];
        const pokemonRight = listPokemons?.[2 * index + 1];

        return (
          <Flex direction="row" justifyContent="center">
            <Show when={!!pokemonLeft}>
              <PokemonCard
                key={pokemonLeft.id}
                id={pokemonLeft.id}
                pokemonTypes={pokemonLeft?.pokemons?.[0]?.types?.map(
                  (pk) => pk.type?.name as PokemonType,
                )}
                name={pokemonLeft.name}
              />
            </Show>
            <Show when={!!pokemonRight}>
              <PokemonCard
                key={pokemonRight?.id}
                id={pokemonRight?.id}
                pokemonTypes={pokemonRight?.pokemons?.[0]?.types?.map(
                  (pk) => pk.type?.name as PokemonType,
                )}
                name={pokemonRight?.name}
              />
            </Show>
          </Flex>
        );
      }}
      components={{
        Footer: SkeletonPokemonList,
      }}
    />
  );
}
