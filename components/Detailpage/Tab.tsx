import { FC } from "react";
import TabAbout from "./TabAbout";
import TabBaseStats from "./TabBaseStats";
import TabMoves from "./TabMoves";

interface ITabProps {
  currentTab: number;
  height: string;
  weight: string;
  abilities: any;
  stats: any;
  moves: any;
}

const Tab: FC<ITabProps> = (props) => {
  const {
    currentTab,
    height,
    weight,
    abilities,
    stats,
    moves,
  } = props;

  switch (currentTab) {
    case 0:
      return (
        <TabAbout
          height={height}
          weight={weight}
          abilities={abilities}
        />
      );
    case 1:
      return <TabBaseStats stats={stats} />;
    case 2:
      return <TabMoves moves={moves} />;
    default:
      return <></>;
  }
};

export default Tab;
