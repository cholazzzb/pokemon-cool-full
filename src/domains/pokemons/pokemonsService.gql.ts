import request from 'graphql-request';

import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiEndpoint } from '@/utils/fetcher';

const getPokemonDetailByIdQuery = graphql(`
  query GetPokemonDetailById($pokemonId: Int!) {
    pokemon_v2_pokemon(where: { id: { _eq: $pokemonId } }) {
      name
      height
      weight
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          id
          name
        }
      }
    }
    pokemon_v2_pokemonmove(
      where: { pokemon_id: { _eq: $pokemonId } }
      order_by: { move_id: asc }
      distinct_on: move_id
    ) {
      move_id
      pokemon_v2_move {
        name
        accuracy
        type_id
        pp
        power
      }
      pokemon_v2_movelearnmethod {
        name
      }
    }
  }
`);

export const getPokemonDetailById = (pokemonId: number) =>
  request(pokeApiEndpoint, getPokemonDetailByIdQuery, {
    pokemonId,
  });
