import * as t from 'runtypes';

export const PokemonItemSchema = t.Record({
  id: t.Number,
  url: t.String,
  name: t.String,
  image: t.String,
  artwork: t.String,
  dreamworld: t.String,
});

export type PokemonItem = t.Static<typeof PokemonItemSchema>;
