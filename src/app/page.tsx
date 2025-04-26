import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import {
  getPokemonTypes,
  PokemonTypesGQLQueryKey,
} from '@/logic/pokemon-type/service.gql';
import {
  getPokemonsByGensAndTypes,
  PokemonsGQLQueryKey,
} from '@/logic/pokemon/service.gql';
import { queryStringFallback } from '@/shared-logic/fallback';
import { getQueryClient } from '@/shared-logic/query';
import Navigator from '@/shared-ui/component/navigator';
import { Layout3Column } from '@/shared-ui/layout/three-column';
import { Box } from '@/shared-ui/panda-css/jsx';
import { PokemonList } from '@/ui/home/pokemon-list';
import { HomeQueryParams } from './param';
import {
  GenerationGQLQueryKey,
  getListGenerations,
} from '@/logic/generation/service.gql';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<HomeQueryParams>;
}) {
  const queryClient = getQueryClient();
  const awaitedSearchParams = await searchParams;
  const { typeIds, genIds } = queryStringFallback(awaitedSearchParams, {
    // All Pokemons Type is 1,2,3,...18
    typeIds: Array(18)
      .fill(0)
      .map((_, idx) => `${idx + 1}`),
    genIds: ['1', '2'],
  });

  const isValidStringNumber = (id: unknown): id is string =>
    typeof id === 'string' && id.trim() !== '' && !isNaN(Number(id));

  if (!Array.isArray(typeIds) || !typeIds.every(isValidStringNumber)) {
    return <Box>Error: Invalid typeIds</Box>;
  }

  if (!Array.isArray(genIds) || !genIds.every(isValidStringNumber)) {
    return <Box>Error: Invalid genIds</Box>;
  }

  void queryClient.prefetchInfiniteQuery({
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
    pages: 3, // prefetch the first 3 pages
  });

  void queryClient.prefetchQuery({
    queryKey: PokemonTypesGQLQueryKey.getList,
    queryFn: getPokemonTypes,
    staleTime: Infinity,
  });

  void queryClient.prefetchQuery({
    queryKey: GenerationGQLQueryKey.getList,
    queryFn: getListGenerations,
    staleTime: Infinity,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Layout3Column>
        {/* <Layout3Column.Right>pokemon detail</Layout3Column.Right> */}
        <Layout3Column.Middle>
          <PokemonList queryParams={{ typeIds, genIds }} />
        </Layout3Column.Middle>
        <Navigator activeNav={'/'} />
      </Layout3Column>
    </HydrationBoundary>
  );
}
