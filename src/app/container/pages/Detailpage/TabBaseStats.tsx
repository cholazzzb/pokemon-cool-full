/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';

import { FunctionComponent } from 'react';

type TabBaseStatsProps = {
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
};

const Status = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  text-transform: capitalize;
`;
const StatusKey = styled.div`
  color: gray;
  display: flex;
  width: 25%;
`;
const StatusValue = styled.div`
  display: flex;
  padding: 0px 10px;
`;

const BarContainer = styled.div`
  background-color: gray;
  width: 100%;
  height: 5px;
  border-radius: 4px;
`;

const TabBaseStats: FunctionComponent<TabBaseStatsProps> = ({ stats }) => {
  return (
    <div>
      {stats.map((status: { stat: { name: string }; base_stat: number }) => (
        <Status key={status.stat.name}>
          <StatusKey>{status.stat.name}</StatusKey>
          <StatusValue>{status.base_stat}</StatusValue>
          <BarContainer>
            <div
              css={css`
                background-color: #89cea5;
                width: ${status.base_stat / 1.5}%;
                height: 5px;
              `}
            ></div>
          </BarContainer>
        </Status>
      ))}
    </div>
  );
};

export default TabBaseStats;
