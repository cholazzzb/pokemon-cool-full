import { useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

import { pokemonGenerations } from '@/domains/pokemonGeneration/pokemonGenerationEntity';
import { getPokemonsByGensAndTypes } from './pokemonsService.gql';

type UseGetPokemonsByGensAndTypesQueryParams = {
  pageSize: number;
  genIds: Array<number>;
  typeIds: Array<number>;
};
const initPage = 1;
export const useGetPokemonsByGensAndTypesQuery = ({
  pageSize,
  genIds,
  typeIds,
}: UseGetPokemonsByGensAndTypesQueryParams) => {
  const variables = {
    pageSize,
    genIds: genIds.length === 0 ? pokemonGenerations : genIds,
    typeIds: typeIds.length === 0 ? allPokemonTypes : typeIds,
  };

  const query = useInfiniteQuery({
    queryKey: [variables],
    queryFn: async ({ pageParam = { page: initPage } }) =>
      getPokemonsByGensAndTypes({ ...variables, page: pageParam.page }),
    staleTime: Infinity,
  });

  const flattenData =
    useMemo(
      () => query.data?.pages.flatMap((page) => page.pokemons),
      [query.data],
    ) ?? [];

  return { ...query, flattenData };
};

const allPokemonTypes = [
  ...Array(12)
    .fill(0)
    .map((_, idx) => idx + 1),
  10001,
  10002,
];
