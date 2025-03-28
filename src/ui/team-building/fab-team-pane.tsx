'use client';

import React from 'react';

import { useDisclosure } from '@/shared-logic/hooks/useDisclosure';
import { BottomSheetModal } from '@/shared-ui/component/bottom-sheet-modal';
import { FAB } from '@/shared-ui/component/fab';
import { Show } from '@/shared-ui/component/flow';
import Button from '@/shared-ui/component/button';
import { Flex } from '@/shared-ui/panda-css/jsx';

export function FABTeamPane() {
  const modal = useDisclosure();

  return (
    <>
      <Show when={!modal.open}>
        <FAB onClick={modal.onOpen} />
      </Show>
      <Show when={modal.open}>
        <BottomSheetModal title="title" onClose={modal.onClose}>
          BROO
          <Flex width="100%">Az</Flex>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A</Button>
          <Button>A3</Button>
        </BottomSheetModal>
      </Show>
    </>
  );
}
