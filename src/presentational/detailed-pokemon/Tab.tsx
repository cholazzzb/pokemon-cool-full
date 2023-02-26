import { FunctionComponent } from 'react';

import { GetPokemonDetailByIdQuery } from '@/__generated__/pokeapi/gql/graphql';
import TabAbout from './TabAbout';
import TabBaseStats from './TabBaseStats';
import TabMoves from './TabMoves';

type TabProps = {
  currentTab: number;
  primaryColor: string;
} & GetPokemonDetailByIdQuery;

const Tab: FunctionComponent<TabProps> = (props) => {
  switch (props.currentTab) {
    case 0:
      return (
        <TabAbout
          height={props.about[0].height ?? 0}
          weight={props.about[0].weight ?? 0}
          abilities={props.about[0].abilities}
        />
      );
    case 1:
      return (
        <TabBaseStats
          stats={props.about[0].stats}
          primaryColor={props.primaryColor}
        />
      );
    case 2:
      return <TabMoves moves={props.moves} />;
    default:
      return <></>;
  }
};

export default Tab;
