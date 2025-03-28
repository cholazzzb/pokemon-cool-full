'use client';

import { Filter } from '@/__generated__/icons';
import { useDisclosure } from '@/shared-logic/hooks/useDisclosure';
import { BottomSheetModal } from '@/shared-ui/component/bottom-sheet-modal';
import { FAB } from '@/shared-ui/component/fab';
import { Show } from '@/shared-ui/component/flow';

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
          Filter
        </BottomSheetModal>
      </Show>
    </>
  );
}
