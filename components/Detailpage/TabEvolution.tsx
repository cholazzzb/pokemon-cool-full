import { useQuery, gql } from "@apollo/client";
import { FC } from "react";

const GET_POKEMON_MOVES = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;

interface TabEvolutionProps {
  currentId: number;
  name: string;
}

const TabEvolution: FC<TabEvolutionProps> = (props) => {
  return <div></div>;
};

export default TabEvolution;
