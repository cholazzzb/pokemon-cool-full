import { useQuery, gql } from "@apollo/client";

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      results {
        id
        name
      }
    }
  }
`;

const useQueryPokemons = () => {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: {
      limit: 1000,
      offset: 0,
    },
  });
  return { loading, error, data };
};

export default useQueryPokemons;
