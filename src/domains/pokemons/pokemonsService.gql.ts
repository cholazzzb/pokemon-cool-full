import request from 'graphql-request';

import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiEndpoint } from '@/utils/fetcher';

const getPokemonDetailByIdQuery = graphql(`
  query GetPokemonDetailById($pokemonId: Int!) {
    about: pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
      name
      height
      weight
      types: pokemon_v2_pokemontypes {
        type: pokemon_v2_type {
          name
          id
        }
      }
      stats: pokemon_v2_pokemonstats {
        value: base_stat
        stat: pokemon_v2_stat {
          id
          name
        }
      }
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
          id
        }
      }
    }
    moves: pokemon_v2_pokemonmove(
      where: { pokemon_id: { _eq: $pokemonId } }
      order_by: { move_id: asc }
      distinct_on: move_id
    ) {
      moveId: move_id
      move: pokemon_v2_move {
        name
        accuracy
        typeId: type_id
        pp
        power
      }
      learnMethod: pokemon_v2_movelearnmethod {
        name
      }
    }
  }
`);

export const getPokemonDetailById = (pokemonId: number) =>
  request(pokeApiEndpoint, getPokemonDetailByIdQuery, {
    pokemonId,
  });
