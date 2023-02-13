import { mainTheme } from '@/presentational/theme';
import { FunctionComponent, PropsWithChildren } from 'react';

type BadgeProps = {
  top?: number;
  right?: number;
};

const Badge: FunctionComponent<PropsWithChildren<BadgeProps>> = ({
  top = 0,
  right = 0,
  children,
}) => {
  const Component = mainTheme.styled('div', {
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
  });

  return <Component>{children}</Component>;
};

export default Badge;
