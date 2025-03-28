import { PropsWithChildren } from 'react';

export function Show(props: PropsWithChildren<{ when: boolean }>) {
  return props.when ? props.children : null;
}
