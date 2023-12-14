import { PropsWithChildren } from 'react';

type ShowProps = {
  when: boolean;
};
export function Show(props: PropsWithChildren<ShowProps>) {
  return props.when ? props.children : null;
}
