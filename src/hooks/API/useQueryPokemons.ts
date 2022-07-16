import { useQuery, gql } from '@apollo/client';

type PokemonsData = {
  pokemons: {
    count: number;
    results: Array<{
      id: string;
      name: string;
      artwork: string;
    }>;
  };
};

type PokemonsVar = {
  limit: number;
  offset: number;
};

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
        artwork
      }
    }
  }
`;

const useQueryPokemons = () =>
  useQuery<PokemonsData, PokemonsVar>(GET_POKEMONS, {
    variables: {
      limit: 1000,
      offset: 0,
    },
  });

export default useQueryPokemons;
