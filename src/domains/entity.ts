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
  abilities: GraphqlQuery<{}, BaseList>;
  ability: GraphqlQuery<{ ability: string }, BaseResponse>;
  berries: GraphqlQuery<{}, BaseList>;
  berry: GraphqlQuery<{ berry: string }, BaseResponse>;
  eggGroups: GraphqlQuery<{}, BaseList>;
  eggGroup: GraphqlQuery<{ eggGroup: string }, BaseResponse>;
  encounterMethods: GraphqlQuery<{}, BaseList>;
  encounterMethod: GraphqlQuery<{ encounterMethod: string }, BaseResponse>;
  evolutionChains: GraphqlQuery<{}, BaseList>;
  evolutionChain: GraphqlQuery<{ id: string }, BaseResponse>;
  evolutionTriggers: GraphqlQuery<{}, BaseList>;
  evolutionTrigger: GraphqlQuery<{ name: string }, BaseResponse>;
  genders: GraphqlQuery<{}, BaseList>;
  gender: GraphqlQuery<{ gender: string }, BaseResponse>;
  growthRates: GraphqlQuery<{}, BaseList>;
  growthRate: GraphqlQuery<{ growthRate: string }, BaseResponse>;
  locations: GraphqlQuery<{}, BaseList>;
  location: GraphqlQuery<{ location: string }, BaseResponse>;
  moves: GraphqlQuery<{}, BaseList>;
  move: GraphqlQuery<{ move: string }, BaseResponse>;
  natures: GraphqlQuery<{}, BaseList>;
  nature: GraphqlQuery<{ nature: string }, BaseResponse>;
  pokemons: GraphqlQuery<{ limit: number; offset: number }, PokemonList>;
  pokemon: GraphqlQuery<{ name: string }, Pokemon>;
  regions: GraphqlQuery<{}, BaseList>;
  region: GraphqlQuery<{ region: string }, BaseResponse>;
  species: GraphqlQuery<{}, BaseList>;
  types: GraphqlQuery<{}, BaseList>;
};

export {};
