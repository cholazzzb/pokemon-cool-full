import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import { Overlay } from '@/presentational/components/Overlay';
import { mainTheme } from '@/presentational/theme';
import Header from './Header';

type DialogProps = {
  headerText: string;
  onClose: () => void;
};

const Dialog: FunctionComponent<DialogProps> = ({
  headerText,
  onClose,
  children,
}) => {
  return (
    <Overlay>
      <Container>
        <Header caption={headerText}>
          <CloseIcon data-testid="dialog-close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseIcon>
        </Header>
        <Body>{children}</Body>
      </Container>
    </Overlay>
  );
};

export default Dialog;

const CloseIcon = mainTheme.styled('span', {
  display: 'flex',
  width: '25px',
  height: '25px',
  color: 'black',
});

const Body = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
});

const Container = mainTheme.styled('div', {
  color: 'black',
  zIndex: '50',
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  bottom: '0%',
  height: '60%',
  width: '100%',
  backgroundColor: 'white',
  borderTopLeftRadius: '30px',
  borderTopRightRadius: '30px',
});
