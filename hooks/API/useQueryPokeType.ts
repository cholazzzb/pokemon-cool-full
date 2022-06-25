import { useQuery, gql } from "@apollo/client";

const GET_POKEMON_TYPE = gql`
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
    }
  }
`;

const useQueryPokeType = (name: string) => {
  const { loading, error, data } = useQuery(GET_POKEMON_TYPE, {
    variables: {
      name,
    },
  });
  return { loading, error, data };
};

export default useQueryPokeType;
