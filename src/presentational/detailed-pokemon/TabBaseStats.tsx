import { FunctionComponent } from 'react';

import { ButtonOutline } from '@/presentational/components/Button';
import { YScrollable } from '@/presentational/components/Layout';
import Text from '@/presentational/components/Text';
import { mainTheme } from '@/presentational/theme';

type TabBaseStatsProps = {
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  primaryColor: string;
};

const BaseStatsLabels = [
  'HP',
  'ATK',
  'DEF',
  'SP.ATK',
  'Sp.DEF',
  'SPD',
  'TOTAL',
];

const TabBaseStats: FunctionComponent<TabBaseStatsProps> = ({
  stats,
  primaryColor,
}) => {
  return (
    <YScrollable style={{ width: '100%' }}>
      {stats.map(
        (status: { stat: { name: string }; base_stat: number }, idx) => {
          return (
            <Status key={status.stat.name}>
              <StatusKey>{BaseStatsLabels[idx]}</StatusKey>
              <StatusValue>{status.base_stat}</StatusValue>
              <BarContainer
                color={primaryColor}
                fill={Math.round((status.base_stat * 100) / 255)}
              />
            </Status>
          );
        },
      )}
      <ButtonOutline
        style={{
          margin: 12,
          backgroundColor: 'transparent',
        }}
      >
        <Text>Close</Text>
      </ButtonOutline>
    </YScrollable>
  );
};

export default TabBaseStats;

type BarContainerProps = {
  color: string;
  fill: number;
};
const BarContainer = (props: BarContainerProps) => {
  const Bar = mainTheme.styled('div', {
    background: `linear-gradient(90deg, ${props.color} ${props.fill}%, #ffffff 0%)`,
    backgroundColor: 'yellow',
    width: '100%',
    height: '10px',
    borderRadius: '4px',
  });

  return <Bar />;
};

const Status = mainTheme.styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '10px',
});
const StatusKey = mainTheme.styled('div', {
  color: 'white',
  display: 'flex',
  width: '70px',
});
const StatusValue = mainTheme.styled('div', {
  color: 'white',
  display: 'flex',
  padding: '0px 10px',
});
