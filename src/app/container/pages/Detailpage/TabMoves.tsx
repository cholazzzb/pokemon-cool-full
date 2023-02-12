import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import { mainTheme } from '@/presentational/theme';

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

const Row = mainTheme.styled('div', {
  paddingInline: '10px',
  marginBlockEnd: '10px',
  height: '30px',
});

const MoveContainer = mainTheme.styled('div', {
  height: '100%',
  overflowY: 'scroll',
  paddingInlineStart: '10px',
});
