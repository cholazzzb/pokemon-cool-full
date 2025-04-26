'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { HomeQueryParams } from '@/app/param';
import {
  getPokemonTypes,
  PokemonTypesGQLQueryKey,
} from '@/logic/pokemon-type/service.gql';
import { PokemonType } from '@/logic/pokemon/entity';
import { Flex } from '@/shared-ui/panda-css/jsx';
import { PokemonTypeTagChip } from './pokemon-type-tag-chip';
import { useRouter } from 'next/navigation';

export function ListFilter(props: { queryParams: HomeQueryParams }) {
  const router = useRouter();

  const listPokemonType = useSuspenseQuery({
    queryKey: PokemonTypesGQLQueryKey.getList,
    queryFn: getPokemonTypes,
  }).data;

  const selectedPokemonTypes = props.queryParams.typeIds.map(
    (pt) => listPokemonType.types[Number(pt) - 1].pokemon_v2_type!.name,
  ) as Array<PokemonType>;

  const onClose = (spt: PokemonType) => {
    const ptId = `${
      listPokemonType.types.findIndex(
        (el) => el.pokemon_v2_type?.name === spt,
      ) + 1
    }`;

    const nextTypeIds = new Set(props.queryParams.typeIds);
    if (nextTypeIds.has(ptId)) {
      nextTypeIds.delete(ptId);
    }

    const url = new URL('/', location.origin);
    if (nextTypeIds.size > 0) {
      Array.from(nextTypeIds.values())
        .sort((an, bn) => an.localeCompare(bn, undefined, { numeric: true }))
        .forEach((typeId) => {
          url.searchParams.append('typeIds', typeId);
        });
    }

    // Add each genId as a separate parameter
    props.queryParams.genIds.forEach((genId) => {
      url.searchParams.append('genIds', genId);
    });

    router.push(url.toString());
  };

  return (
    <Flex
      direction="row"
      alignItems="center"
      overflowX="scroll"
      paddingY="2x"
      marginX="2x"
    >
      {selectedPokemonTypes.map((spt) => (
        <PokemonTypeTagChip
          key={spt}
          pokemonType={spt}
          onClose={() => onClose(spt)}
        />
      ))}
    </Flex>
  );
}
