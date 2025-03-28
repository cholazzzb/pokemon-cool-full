import { ComponentProps, ReactNode } from 'react';

import { breakpoints } from '../config/theme';
import { css } from '../panda-css/css';
import { Box, Flex, styled } from '../panda-css/jsx';

export function Layout3Column(props: ComponentProps<typeof Box>) {
  return (
    <Box
      className={css({
        height: '100vh',
        maxWidth: breakpoints.sm,
        md: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
          maxWidth: '100%',
          borderInline: '4px solid',
          borderInlineColor: 'gray.200',
        },
      })}
      {...props}
    />
  );
}

function RightSm(props: { children: ReactNode }) {
  return <>{props.children}</>;
}
Layout3Column.RightSm = RightSm;
function RightMd(props: ComponentProps<typeof Box>) {
  return (
    <Box
      {...props}
      order={2}
      className={css({
        display: 'none',
        md: {
          display: 'flex',
          width: '100%',
        },
      })}
    />
  );
}
Layout3Column.RightMd = RightMd;

function Middle(props: ComponentProps<typeof Flex>) {
  return (
    <Flex
      {...props}
      order={1}
      direction="column"
      className={css({
        height: '100%',
        width: '100%',
        overflowY: 'scroll',
        paddingBlockEnd: 'navigator',
        md: {
          paddingBlockEnd: 'initial',
          borderLeft: 'solid 4px',
          borderLeftColor: 'gray.200',
          borderRight: 'solid 4px',
          borderRightColor: 'gray.200',
        },
      })}
    />
  );
}
Layout3Column.Middle = Middle;

export const BottomSheet = styled(Box, {
  base: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
    paddingBlockStart: '60px',
    marginBlockEnd: 'navigator',
  },
});
