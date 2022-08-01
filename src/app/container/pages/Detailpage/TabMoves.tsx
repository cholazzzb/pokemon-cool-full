/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import styled from '@emotion/styled';

const Row = styled.div`
  padding-inline: 10px;
  margin-block-end: 10px;
  height: 30px;
`;

const MoveContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-inline-start: 10px;
`;

type TabMoveProps = {
  moves: Array<{
    move: Omit<BaseName, 'id'>;
  }>;
};

const TabMoves: FunctionComponent<TabMoveProps> = ({ moves }) => {
  return (
    <MoveContainer>
      {moves.map((move) => (
        <Row key={move.move.name}>{move.move.name}</Row>
      ))}
    </MoveContainer>
  );
};

export default TabMoves;
