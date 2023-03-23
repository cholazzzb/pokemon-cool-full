import * as t from 'runtypes';

import { Pokemon, PokemonList } from '@/domains/pokemon/pokemonEntity';

export type BaseResponse = {
  message: string;
  status: boolean;
  response: JSON;
  params: JSON;
};

export type BaseList = {
  count: number;
  next: string;
  previous: string;
  results: [BaseName];
  status: boolean;
  message: string;
};

export const BaseNameSchema = t.Record({
  id: t.Union(t.Number, t.Null),
  url: t.String,
  name: t.String,
});

export type BaseName = t.Static<typeof BaseNameSchema>;

type GraphqlQuery<VarType, DataType> = {
  var: VarType;
  data: DataType;
};

export type Query = {
  abilities: GraphqlQuery<Record<string, never>, BaseList>;
  ability: GraphqlQuery<{ ability: string }, BaseResponse>;
  berries: GraphqlQuery<Record<string, never>, BaseList>;
  berry: GraphqlQuery<{ berry: string }, BaseResponse>;
  eggGroups: GraphqlQuery<Record<string, never>, BaseList>;
  eggGroup: GraphqlQuery<{ eggGroup: string }, BaseResponse>;
  encounterMethods: GraphqlQuery<Record<string, never>, BaseList>;
  encounterMethod: GraphqlQuery<{ encounterMethod: string }, BaseResponse>;
  evolutionChains: GraphqlQuery<Record<string, never>, BaseList>;
  evolutionChain: GraphqlQuery<{ id: string }, BaseResponse>;
  evolutionTriggers: GraphqlQuery<Record<string, never>, BaseList>;
  evolutionTrigger: GraphqlQuery<{ name: string }, BaseResponse>;
  genders: GraphqlQuery<Record<string, never>, BaseList>;
  gender: GraphqlQuery<{ gender: string }, BaseResponse>;
  growthRates: GraphqlQuery<Record<string, never>, BaseList>;
  growthRate: GraphqlQuery<{ growthRate: string }, BaseResponse>;
  locations: GraphqlQuery<Record<string, never>, BaseList>;
  location: GraphqlQuery<{ location: string }, BaseResponse>;
  moves: GraphqlQuery<Record<string, never>, BaseList>;
  move: GraphqlQuery<{ move: string }, BaseResponse>;
  natures: GraphqlQuery<Record<string, never>, BaseList>;
  nature: GraphqlQuery<{ nature: string }, BaseResponse>;
  pokemons: GraphqlQuery<{ limit: number; offset: number }, PokemonList>;
  pokemon: GraphqlQuery<{ name: string }, Pokemon>;
  regions: GraphqlQuery<Record<string, never>, BaseList>;
  region: GraphqlQuery<{ region: string }, BaseResponse>;
  species: GraphqlQuery<Record<string, never>, BaseList>;
  types: GraphqlQuery<Record<string, never>, BaseList>;
};
