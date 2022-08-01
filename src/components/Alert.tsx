/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment, FunctionComponent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Header from './Header';

const Overlay = styled.div`
  z-index: 50;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseIcon = styled.span`
  display: flex;
  width: 25px;
  height: 25px;
  color: black;
`;

const AlertBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  color: black;
  z-index: 50;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0%;
  height: 60%;
  width: 100%;
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

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
