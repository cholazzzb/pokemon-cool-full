'use client';

import { useRouter } from 'next/navigation';
import { useSuspenseQuery } from '@tanstack/react-query';

import { Filter } from '@/__generated__/icons';
import { HomeQueryParams } from '@/app/param';
import { PokemonType, pokemonTypes } from '@/logic/pokemon/entity';
import { useDisclosure } from '@/shared-logic/hooks/useDisclosure';
import { BottomSheetModal } from '@/shared-ui/component/bottom-sheet-modal';
import { FAB } from '@/shared-ui/component/fab';
import { Show } from '@/shared-ui/component/flow';
import Text from '@/shared-ui/component/text';
import { css } from '@/shared-ui/panda-css/css';
import { Flex } from '@/shared-ui/panda-css/jsx';
import { PokemonTypeTagChip } from './pokemon-type-tag-chip';
import {
  getPokemonTypes,
  PokemonTypesGQLQueryKey,
} from '@/logic/pokemon-type/service.gql';
import {
  GenerationGQLQueryKey,
  getListGenerations,
} from '@/logic/generation/service.gql';

export function FABFilter(props: { queryParams: HomeQueryParams }) {
  const router = useRouter();
  const modal = useDisclosure();

  const listPokemonType = useSuspenseQuery({
    queryKey: PokemonTypesGQLQueryKey.getList,
    queryFn: getPokemonTypes,
  }).data;

  const listGeneration = useSuspenseQuery({
    queryKey: GenerationGQLQueryKey.getList,
    queryFn: getListGenerations,
  }).data;

  const onClick = (pt: PokemonType) => {
    const ptId = `${
      listPokemonType.types.findIndex((el) => el.pokemon_v2_type?.name === pt) +
      1
    }`;

    const nextTypeIds = new Set(props.queryParams.typeIds);
    if (nextTypeIds.has(ptId)) {
      nextTypeIds.delete(ptId);
    } else {
      nextTypeIds.add(ptId);
    }

    const url = new URL('/', location.origin);
    if (nextTypeIds.size > 0) {
      Array.from(nextTypeIds.values())
        .sort((an, bn) => an.localeCompare(bn, undefined, { numeric: true }))
        .forEach((typeId) => {
          url.searchParams.append('typeIds', typeId);
        });
    }

    if (
      props.queryParams.genIds &&
      props.queryParams.genIds.length > 0 &&
      props.queryParams.genIds.length !== listGeneration.generations.length
    ) {
      // Add each genId as a separate parameter
      props.queryParams.genIds.forEach((genId) => {
        url.searchParams.append('genIds', genId);
      });
    }

    router.push(url.toString());
  };

  return (
    <>
      <Show when={!modal.open}>
        <FAB bottom="90px" padding="3x" onClick={modal.onOpen}>
          <Filter />
        </FAB>
      </Show>
      <Show when={modal.open}>
        <BottomSheetModal title="Filter" onClose={modal.onClose}>
          <Text color="black">Pokemon Type</Text>
          <Flex width="100%" flexWrap="wrap" justify="center">
            {pokemonTypes.map((pt) => {
              return (
                <PokemonTypeTagChip
                  key={pt}
                  pokemonType={pt}
                  css={css({ cursor: 'pointer', marginBlockEnd: '1x' })}
                  onClick={() => onClick(pt)}
                />
              );
            })}
          </Flex>
        </BottomSheetModal>
      </Show>
    </>
  );
}
