import * as t from 'runtypes';

import { BaseNameSchema, Query } from '@/domains/entity';
import { fetcher } from '@/utils/fetcher';

const PokemonNameSchema = t.Record({
  pokemons: t.Record({
    results: t.Array(
      t.Record({
        id: t.Number,
        name: t.String,
      }),
    ),
  }),
});

export type PokemonNameType = t.Static<typeof PokemonNameSchema>;

export const getPokemonName = async (pokemonId: number) =>
  await fetcher<PokemonNameType, Query['pokemons']['var']>(
    `
      query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
          results {
            id
            name
          }
        }
      }`,
    {
      limit: 1,
      offset: pokemonId - 1,
    },
    PokemonNameSchema,
  );

const AllPokemonsNameSchema = t.Record({
  pokemons: t.Record({
    count: t.Number,
    results: t.Array(
      t.Record({
        name: t.String,
      }),
    ),
  }),
});

export type AllPokemonsNameType = t.Static<typeof AllPokemonsNameSchema>;

export const getAllPokemonsName = async () =>
  await fetcher<AllPokemonsNameType, Query['pokemons']['var']>(
    `  query pokemons($limit: Int, $offset: Int) {
      pokemons(limit: $limit, offset: $offset) {
        count
        results {
          name
        }
      }
    }`,
    {
      limit: 2000,
      offset: 0,
    },
    AllPokemonsNameSchema,
  );

const PokemonDetailByNameSchema = t.Record({
  pokemon: t.Record({
    types: t.Array(
      t.Record({
        type: BaseNameSchema,
      }),
    ),
    height: t.Number,
    weight: t.Number,
    abilities: t.Array(
      t.Record({
        ability: BaseNameSchema.omit('id'),
      }),
    ),
    stats: t.Array(
      t.Record({
        base_stat: t.Number,
        stat: t.Record({
          name: t.String,
        }),
      }),
    ),
    moves: t.Array(
      t.Record({
        move: BaseNameSchema.omit('id'),
      }),
    ),
  }),
});

export type PokemonDetailByNameType = t.Static<
  typeof PokemonDetailByNameSchema
>;

export const getPokemonDetailByName = async (pokemonName: string) =>
  await fetcher<PokemonDetailByNameType, Query['pokemon']['var']>(
    `query Pokemon($name: String!) {
      pokemon(name: $name) {
        types {
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
            url
            name
          }
        }
        stats {
          base_stat
          stat {
            name
          }
        }
        moves {
          move {
            url
            name
          }
        }
      }
    }`,
    {
      name: pokemonName,
    },
    PokemonDetailByNameSchema,
  );
