import { ComponentProps, PropsWithChildren } from 'react';

import { BoxStyles } from '../panda-css/patterns/box';
import { CircleButton } from './button';
import { Portal } from './portal';

type Props = PropsWithChildren<
  ComponentProps<typeof CircleButton> & {
    bottom?: BoxStyles['bottom'];
    onClick?: () => void;
  }
>;

export function FAB({ bottom = 0, onClick, children, ...props }: Props) {
  return (
    <Portal>
      <CircleButton
        {...props}
        display={{ base: 'flex' }}
        zIndex="floatingActionButton"
        position="absolute"
        bottom={bottom}
        right="20px"
        cursor="pointer"
        onClick={onClick}
      >
        {children}
      </CircleButton>
    </Portal>
  );
}
