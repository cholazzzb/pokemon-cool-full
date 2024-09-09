import { FunctionComponent, PropsWithChildren } from 'react';

import { styled } from '../panda-css/jsx';

type BadgeProps = {
  top?: number;
  right?: number;
};

const Badge: FunctionComponent<PropsWithChildren<BadgeProps>> = ({
  top = 0,
  right = 0,
  children,
}) => {
  const Component = styled('div', {
    base: {
      position: 'absolute',
      top: `${top}px`,
      right: `${right}px`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '25px',
      height: '25px',
      borderRadius: '9999px',
      backgroundColor: 'green',
      color: 'white',
    },
  });

  return <Component>{children}</Component>;
};

export default Badge;
