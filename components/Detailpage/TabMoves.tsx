/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";
import AutoSizer from "react-virtualized-auto-sizer";

import { FixedSizeList as List } from "react-window";

const RowStyle = css`
  padding: 10px;
  height: 60px;
`;

interface IRowProps {
  data: any;
  index: number;
  style: any;
}
const Row: FC<IRowProps> = (props) => {
  const { data, index, style } = props;
  const { moves } = data;

  return (
    <div css={RowStyle} style={style}>
      {moves[index].move.name}
    </div>
  );
};

interface TabMoveProps {
  moves: any;
}

const MoveContainerStyle = css`
  overflow: auto;
  padding: 0px 10px;
  height: 100%;
`;

const MoveStyle = css`
  padding: 10px;
  overflow: auto;
`;

const TabMoves: FC<TabMoveProps> = (props) => {
  const { moves } = props;

  return (
    <div css={MoveContainerStyle}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            css={MoveStyle}
            height={height}
            itemCount={moves.length}
            itemSize={40}
            width={width}
            itemData={{
              moves: moves,
            }}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default TabMoves;
