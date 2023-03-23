import { PropsWithChildren } from 'react';

import { mainTheme } from 'src/presentational/theme';

function Navigator({ children }: PropsWithChildren) {
  return <NavigatorContainer>{children}</NavigatorContainer>;
}

export default Navigator;

const NavigatorContainer = mainTheme.styled('div', {
  position: 'fixed',
  bottom: 0,
  zIndex: '$navigator',
  display: 'flex',
  width: '100%',
  height: '65px',
  justifyContent: 'center',
  borderTop: 'solid 4px',
  borderColor: '#f2f3f5',
  backgroundColor: '#f2f3f5',
  '@md': {
    position: 'initial',
    bottom: 0,
    zIndex: 'initial',
    flexDirection: 'column',
    justifyContent: 'start',
    height: '100%',
  },
});

const NavigatorItemText = mainTheme.styled('p', {
  display: 'flex',
  justifyContent: 'center',
  fontSize: '15px',
  margin: '0px',
  color: 'black',
  '@md': {
    marginInlineStart: '10px',
  },
});
Navigator.ItemText = NavigatorItemText;

export const NavigatorItem = mainTheme.styled('div', {
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
  '&:hover': {
    backgroundColor: '#d9dadc',
  },
  '@md': {
    flexDirection: 'row',
    minHeight: '50px',
    width: 'initial',
    justifyContent: 'start',
    padding: '10px',
    marginInline: '70px',
  },
});

Navigator.Item = NavigatorItem;

const NavigatorItemIcon = mainTheme.styled('span', {
  display: 'flex',
  width: '20px',
  height: '20px',
  justifyContent: 'center',
});

Navigator.ItemIcon = NavigatorItemIcon;
