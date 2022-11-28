/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FunctionComponent } from 'react';

import { Overlay } from 'src/presentational/components/Overlay';
import Header from './Header';

const CloseIcon = styled.span`
  display: flex;
  width: 25px;
  height: 25px;
  color: black;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
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
