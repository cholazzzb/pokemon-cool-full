import request from 'graphql-request';

import { graphql } from '@/__generated__/pokeapi/gql';
import { GetPokemonsByGensAndTypesQuery } from '@/__generated__/pokeapi/gql/graphql';

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

export const getPokemonsByGensAndTypesQuery = graphql(`
  query GetPokemonsByGensAndTypes(
    $genIds: [Int!]
    $typeIds: [Int!]
    $limit: Int!
    $offset: Int!
  ) {
    pokemons: pokemon_v2_pokemonspecies(
      where: {
        pokemon_v2_pokemons: {
          pokemon_v2_pokemontypes: { type_id: { _in: $typeIds } }
        }
        generation_id: { _in: $genIds }
      }
      limit: $limit
      offset: $offset
      order_by: { id: asc }
    ) {
      id
      genId: generation_id
      name
      pokemons: pokemon_v2_pokemons {
        types: pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
            id
          }
        }
      }
    }
  }
`);

type GetPokemonsByGensAndTypes = (params: {
  genIds: Array<number>;
  typeIds: Array<number>;
  page: number;
  pageSize: number;
}) => Promise<GetPokemonsByGensAndTypesQuery>;

export const getPokemonsByGensAndTypes: GetPokemonsByGensAndTypes = ({
  genIds,
  typeIds,
  page,
  pageSize,
}) =>
  request(pokeApiEndpoint, getPokemonsByGensAndTypesQuery, {
    genIds,
    typeIds,
    offset: (page - 1) * pageSize,
    limit: pageSize,
  });
