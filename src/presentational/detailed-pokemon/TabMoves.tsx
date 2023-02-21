import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import { ButtonOutline } from '@/presentational/components/Button';
import { Flex } from '@/presentational/components/Layout';
import { TextWhite } from '@/presentational/components/Text';
import { mainTheme } from '@/presentational/theme';

type TabMoveProps = {
  moves: Array<{
    move: Omit<BaseName, 'id'>;
  }>;
};

const TabMoves: FunctionComponent<TabMoveProps> = ({ moves }) => {
  return (
    <>
      <MoveContainer>
        {moves.map((move) => (
          <Row key={move.move.name}>
            <TextWhite style={{ textTransform: 'capitalize' }}>
              {move.move.name.replace(/-/g, ' ')}
            </TextWhite>
          </Row>
        ))}
      </MoveContainer>
      <Flex
        style={{
          width: '100%',
          padding: 12,
        }}
      >
        <ButtonOutline
          style={{
            width: '100%',
            backgroundColor: 'transparent',
          }}
        >
          <TextWhite>Close</TextWhite>
        </ButtonOutline>
      </Flex>
    </>
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
