import { gql, useQuery } from '@apollo/client';
import { Pokemon } from './pokemonEntity';

type PokemonTypeData = {
  pokemon: { types: Pokemon['types'] };
};

type PokemonTypeVar = {
  name: string;
};

const USE_POKE_TYPE = gql`
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

export const usePokeType = (name: string) =>
  useQuery<PokemonTypeData, PokemonTypeVar>(USE_POKE_TYPE, {
    variables: {
      name,
    },
    context: {
      clientName: 'mazipan',
    },
    fetchPolicy: 'cache-first',
  });

type PokemonDetailData = {
  pokemon: {
    types: Pokemon['types'];
    height: number;
    weight: number;
    abilities: Pokemon['abilities'];
    stats: Pokemon['stats'];
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

const USE_POKEMON_DETAIL = gql`
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
          id
          url
          name
        }
        is_hidden
        slot
      }
      stats {
        base_stat
        effort
        stat {
          id
          url
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

export const usePokeDetail = (name: string) =>
  useQuery<PokemonDetailData, PokemonDetailVars>(USE_POKEMON_DETAIL, {
    variables: {
      name,
    },
  });
