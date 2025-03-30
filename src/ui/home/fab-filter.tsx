'use client';

import { Filter } from '@/__generated__/icons';
import { pokemonTypes } from '@/logic/pokemon/entity';
import { useDisclosure } from '@/shared-logic/hooks/useDisclosure';
import { BottomSheetModal } from '@/shared-ui/component/bottom-sheet-modal';
import { FAB } from '@/shared-ui/component/fab';
import { Show } from '@/shared-ui/component/flow';
import Text from '@/shared-ui/component/text';
import { css } from '@/shared-ui/panda-css/css';
import { Flex } from '@/shared-ui/panda-css/jsx';
import { grid } from '@/shared-ui/panda-css/patterns/grid';
import { PokemonTypeTag } from './pokemon-type-tag';

export function FABFilter() {
  const modal = useDisclosure();

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
          <Flex width="100%">
            <Flex className={grid({ columns: 8, gap: 2 })}>
              {pokemonTypes.map((pt) => (
                <PokemonTypeTag
                  key={pt}
                  pokemonType={pt}
                  css={css({ cursor: 'pointer' })}
                />
              ))}
            </Flex>
          </Flex>
        </BottomSheetModal>
      </Show>
    </>
  );
}
