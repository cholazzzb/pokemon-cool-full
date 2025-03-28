import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiSvc } from '@/shared-logic/service';

const getPokemonsByGensAndTypesQuery = graphql(`
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

export const PokemonsGQLQueryKey = {
  getList: ({
    genIds,
    typeIds,
  }: {
    genIds: Array<string>;
    typeIds: Array<string>;
  }) => {
    return [
      'pokemons',
      { genIds: genIds.sort((an, bn) => an.localeCompare(bn)) },
      { typeIds: typeIds.sort((an, bn) => an.localeCompare(bn)) },
    ];
  },
};

export function getPokemonsByGensAndTypes({
  genIds,
  typeIds,
  limit = 10,
  offset = 0,
}: {
  genIds?: Array<number>;
  typeIds?: Array<number>;
  limit?: number;
  offset?: number;
}) {
  return pokeApiSvc(getPokemonsByGensAndTypesQuery, {
    genIds,
    typeIds,
    limit,
    offset,
  });
}
