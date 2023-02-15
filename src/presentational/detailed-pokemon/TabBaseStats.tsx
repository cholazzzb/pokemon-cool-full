import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';
import { getPrimaryColorFromType } from '@/presentational/colorTheme';
import { mainTheme } from '@/presentational/theme';

type TabBaseStatsProps = {
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  types: Array<{
    type: BaseName;
  }>;
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
  types,
}) => {
  return (
    <>
      {stats.map(
        (status: { stat: { name: string }; base_stat: number }, idx) => {
          const primaryColorType = getPrimaryColorFromType(types[0].type.name);

          return (
            <Status key={status.stat.name}>
              <StatusKey>{BaseStatsLabels[idx]}</StatusKey>
              <StatusValue>{status.base_stat}</StatusValue>
              <BarContainer
                color={primaryColorType}
                fill={Math.round((status.base_stat * 100) / 255)}
              />
            </Status>
          );
        },
      )}
    </>
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
  color: 'gray',
  display: 'flex',
  width: '70px',
});
const StatusValue = mainTheme.styled('div', {
  display: 'flex',
  padding: '0px 10px',
});
