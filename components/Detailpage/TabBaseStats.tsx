/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import { FC } from "react";

interface TabBaseStatsProps {
  stats: any;
}

const StatusStyle = css`
  display: flex;
  align-items: center;
  padding: 10px;
  text-transform: capitalize;
`;
const StatusKeyStyle = css`
  color: gray;
  display: flex;
  width: 25%;
`;
const StatusValueStyle = css`
  display: flex;
  padding: 0px 10px;
`;

const BarContainerStyle = css`
  background-color: gray;
  width: 100%;
  height: 5px;
  border-radius: 4px;
`;

const TabBaseStats: FC<TabBaseStatsProps> = (props) => {
  const { stats } = props;

  return (
    <div>
      {stats.map((status: { stat: { name: string }; base_stat: number }) => (
        <div key={status.stat.name} css={StatusStyle}>
          <div css={StatusKeyStyle}>{status.stat.name}</div>
          <div css={StatusValueStyle}>{status.base_stat}</div>
          <div css={BarContainerStyle}>
            <div
              css={css`
                background-color: #89cea5;
                width: ${status.base_stat / 1.5}%;
                height: 5px;
              `}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TabBaseStats;
