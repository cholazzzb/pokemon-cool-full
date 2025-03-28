'use client';

import Image from 'next/image';

import { getAsset } from '@/shared-logic/asset';
import { useDisclosure } from '@/shared-logic/hooks/useDisclosure';
import { BottomSheetModal } from '@/shared-ui/component/bottom-sheet-modal';
import { FAB } from '@/shared-ui/component/fab';
import { Show } from '@/shared-ui/component/flow';

export function FABSearch() {
  const modal = useDisclosure();

  return (
    <>
      <Show when={!modal.open}>
        <FAB
          bottom="150px"
          padding="3x"
          color="secondary"
          onClick={modal.onOpen}
        >
          <Image
            src={getAsset('icons/search')}
            alt="search-icon"
            width={25}
            height={25}
          />
        </FAB>
      </Show>
      <Show when={modal.open}>
        <BottomSheetModal onClose={modal.onClose}>Search</BottomSheetModal>
      </Show>
    </>
  );
}
