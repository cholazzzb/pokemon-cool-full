import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, FunctionComponent, useState } from 'react';

import { mainTheme } from '../theme';
import Header from './Header';

type AlertProps = {
  headText: string;
};

const Alert: FunctionComponent<AlertProps> = ({ headText, children }) => {
  const [show, setShow] = useState<boolean>(true);

  const onClose = () => {
    setShow(false);
  };

  if (!show) return <Fragment></Fragment>;

  return (
    <Overlay>
      <Container>
        <Header caption={headText}>
          <CloseIcon data-testid="alert-close-button" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseIcon>
        </Header>
        <AlertBody>{children}</AlertBody>
      </Container>
    </Overlay>
  );
};

export default Alert;

const Overlay = mainTheme.styled('div', {
  zIndex: '50',
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
});

const CloseIcon = mainTheme.styled('span', {
  display: 'flex;',
  width: '25px;',
  height: '25px;',
  color: 'black;',
});

const AlertBody = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
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
