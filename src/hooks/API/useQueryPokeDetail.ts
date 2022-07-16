import { useQuery, gql } from '@apollo/client';

type PokemonDetailData = {
  pokemon: {
    types: Array<{
      slot: string;
      type: {
        id: string;
        url: string;
        name: string;
      };
    }>;
    height: string;
    weight: string;
    abilities: Array<{
      ability: {
        url: string;
        name: string;
      };
    }>;
    stats: Array<{
      base_stat: string;
      stat: {
        name: string;
      };
    }>;
    moves: Array<{
      move: {
        url: string;
        name: string;
      };
    }>;
    sprites: Array<{ front_default: string }>;
  };
};

type PokemonDetailVars = {
  name: string;
};

const GET_POKEDETAIL = gql`
  query Pokemon($name: String!) {
    pokemon(name: $name) {
      types {
        slot
        type {
          id
          url
          name
        }
      }
      height
      weight
      abilities {
        ability {
          url
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
      moves {
        move {
          url
          name
        }
      }
      sprites {
        front_default
      }
    }
  }
`;

const useQueryPokeDetail = (name: string) =>
  useQuery<PokemonDetailData, PokemonDetailVars>(GET_POKEDETAIL, {
    variables: {
      name,
    },
  });

export default useQueryPokeDetail;
