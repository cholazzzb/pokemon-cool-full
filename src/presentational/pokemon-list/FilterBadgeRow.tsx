import { PropsWithChildren } from 'react';

import { Flex } from '@/presentational/components/Layout';

type FilterBadgeRowProps = PropsWithChildren;

export default function FilterBadgeRow(props: FilterBadgeRowProps) {
  return (
    <Flex
      css={{
        alignItems: 'center',
        padding: '$1',
        height: 72,
        overflowY: 'scroll',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px;',
      }}
    >
      {props.children}
    </Flex>
  );
}
