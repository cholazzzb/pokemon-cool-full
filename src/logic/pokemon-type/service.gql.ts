import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiSvc } from '@/shared-logic/service';

const getPokemonTypesQuery = graphql(`
  query GetPokemonTypesQuery {
    types: pokemon_v2_pokemontype(distinct_on: type_id) {
      pokemon_v2_type {
        name
        id
      }
    }
  }
`);

export const PokemonTypesGQLQueryKey = {
  getList: ['pokemon-types', 'list'],
};

export function getPokemonTypes() {
  return pokeApiSvc(getPokemonTypesQuery);
}
