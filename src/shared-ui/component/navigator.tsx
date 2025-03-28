import Link from 'next/link';

import { Navigation } from '@/shared-logic/route';
import { css, cva } from '../panda-css/css';
import { styled } from '../panda-css/jsx';

function Navigator({ activeNav }: { activeNav: Navigation }) {
  return (
    <NavigatorContainer>
      <NavigatorItem active={activeNav === '/'}>
        <Link
          href="/"
          className={css({
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            color: 'inherit',
          })}
        >
          <NavigatorItemText>Encyclopedia</NavigatorItemText>
        </Link>
      </NavigatorItem>
      <NavigatorItem active={activeNav === '/team-builder'}>
        <Link
          href="/team-builder"
          className={css({
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            textDecoration: 'none',
            color: 'inherit',
          })}
        >
          <NavigatorItemText>Team Builder</NavigatorItemText>
        </Link>
      </NavigatorItem>
    </NavigatorContainer>
  );
}

export default Navigator;

const NavigatorContainer = styled('div', {
  base: {
    position: 'fixed',
    bottom: 0,
    zIndex: 'navigator',
    display: 'flex',
    width: '100%',
    height: 'navigator',
    marginBlockEnd: '1x',
    justifyContent: 'center',
    borderTop: 'solid 4px',
    borderColor: 'gray.200',
    backgroundColor: 'gray.100',
    md: {
      position: 'initial',
      bottom: 0,
      zIndex: 'initial',
      flexDirection: 'column',
      justifyContent: 'start',
      height: '100%',
    },
  },
});

const NavigatorItemText = styled('p', {
  base: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '15px',
    margin: '0px',
    color: 'black',
    md: {
      marginInlineStart: '12px',
    },
  },
});
Navigator.ItemText = NavigatorItemText;

export const NavigatorItem = styled(
  'button',
  cva({
    base: {
      textDecoration: 'none',
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '3px',
      backgroundColor: 'white',
      cursor: 'pointer',
      _hover: {
        backgroundColor: 'gray.200',
      },
      md: {
        flexDirection: 'row',
        height: '50px',
        width: 'initial',
        justifyContent: 'start',
        marginInline: '70px',
      },
    },
    variants: {
      active: {
        true: {
          border: '4px solid',
          borderRadius: '8px',
          transition: 'border-color 0.5s ease',
          animation: 'rainbowBorder 2s linear infinite',
        },
      },
    },
  }),
);
Navigator.Item = NavigatorItem;

const NavigatorItemIcon = styled('span', {
  base: {
    display: 'flex',
    width: '20px',
    height: '20px',
    justifyContent: 'center',
  },
});
Navigator.ItemIcon = NavigatorItemIcon;
