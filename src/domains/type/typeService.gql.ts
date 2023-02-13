import request from 'graphql-request';

import { graphql } from '@/__generated__/pokeapi/gql';
import { pokeApiEndpoint } from '@/utils/fetcher';

const getListTypesQuery = graphql(`
  query GetListTypes {
    pokemon_v2_type {
      id
      name
    }
  }
`);

export type GetListTypesRes = Awaited<ReturnType<typeof getListTypes>>;

export const getListTypes = () => request(pokeApiEndpoint, getListTypesQuery);

const getTypeDetailByIdQuery = graphql(`
  query GetTypeDetailById($typeId: Int!) {
    pokemon_v2_type(where: { id: { _eq: $typeId } }) {
      name
      pokemon_v2_typeefficacies {
        damage_factor
        target_type_id
        pokemonV2TypeByTargetTypeId {
          name
        }
      }
    }
  }
`);

export type GetTypeDetailByIdRes = Awaited<
  ReturnType<typeof getTypeDetailById>
>;

export const getTypeDetailById = (typeId: number) =>
  request(pokeApiEndpoint, getTypeDetailByIdQuery, {
    typeId,
  });
