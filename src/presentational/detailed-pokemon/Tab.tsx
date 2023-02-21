import { FunctionComponent } from 'react';

import { BaseName } from '@/domains/entity';

import TabAbout from './TabAbout';
import TabBaseStats from './TabBaseStats';
import TabMoves from './TabMoves';

type TabProps = {
  currentTab: number;
  primaryColor: string;
  height: number;
  weight: number;
  abilities: Array<{ ability: Omit<BaseName, 'id'> }>;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
  moves: Array<{
    move: Omit<BaseName, 'id'>;
  }>;
};

const Tab: FunctionComponent<TabProps> = ({
  currentTab,
  primaryColor,
  height,
  weight,
  abilities,
  stats,
  moves,
}) => {
  switch (currentTab) {
    case 0:
      return <TabAbout height={height} weight={weight} abilities={abilities} />;
    case 1:
      return <TabBaseStats stats={stats} primaryColor={primaryColor} />;
    case 2:
      return <TabMoves moves={moves} />;
    default:
      return <></>;
  }
};

export default Tab;
