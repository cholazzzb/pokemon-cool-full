import { useQuery, gql } from '@apollo/client';

type PokemonTypeData = {
  pokemon: {
    types: Array<{
      slot: string;
      type: {
        id: number;
        url: string;
        name: string;
      };
    }>;
  };
};

type PokemonTypeVar = {
  name: string;
};

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

const useQueryPokeType = (name: string) =>
  useQuery<PokemonTypeData, PokemonTypeVar>(GET_POKEMON_TYPE, {
    variables: {
      name,
    },
  });

export default useQueryPokeType;
