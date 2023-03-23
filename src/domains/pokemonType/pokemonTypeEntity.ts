import * as t from 'runtypes';

const PokemonTypeSchema = t.Union(
  t.Literal('normal'),
  t.Literal('fire'),
  t.Literal('fighting'),
  t.Literal('water'),
  t.Literal('flying'),
  t.Literal('grass'),
  t.Literal('poison'),
  t.Literal('electric'),
  t.Literal('ground'),
  t.Literal('psychic'),
  t.Literal('rock'),
  t.Literal('ice'),
  t.Literal('bug'),
  t.Literal('dragon'),
  t.Literal('ghost'),
  t.Literal('dark'),
  t.Literal('steel'),
  t.Literal('fairy'),
);

export const asPokemonType = (value: string): PokemonType | null => {
  try {
    return PokemonTypeSchema.check(value);
  } catch (error) {
    return null;
  }
};

export type PokemonType = t.Static<typeof PokemonTypeSchema>;

export const pokemonTypes: Array<PokemonType> = [
  'normal',
  'fire',
  'fighting',
  'water',
  'flying',
  'grass',
  'poison',
  'electric',
  'ground',
  'psychic',
  'rock',
  'ice',
  'bug',
  'dragon',
  'ghost',
  'dark',
  'steel',
  'fairy',
];
