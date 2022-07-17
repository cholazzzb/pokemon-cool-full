import * as t from 'runtypes';
import { AbilitySchema } from '@/domains/ability/abilityEntity';
import { BaseNameSchema } from '../entity';
import { GameIndexSchema } from '@/domains/gameIndex/gameIndexEntity';
import { PokemonItemSchema } from '../pokemonItem/pokemonItemEntity';
import { HeldItemSchema } from '../heldItem/heldItemEntity';
import { MoveSchema } from '../move/moveEntity';
import { StatSchema } from '../stat/statEntity';
import { typeSchema } from '../type/typeEntity';

const PokemonSchema = t.Record({
  abilities: t.Array(AbilitySchema),
  base_experience: t.Number,
  forms: t.Array(BaseNameSchema),
  game_indices: t.Array(GameIndexSchema),
  height: t.Number,
  held_items: t.Array(HeldItemSchema),
  id: t.Number,
  is_default: t.Boolean,
  location_area_encounters: t.String,
  moves: t.Array(MoveSchema),
  name: t.String,
  order: t.Number,
  species: BaseNameSchema,
  stats: t.Array(StatSchema),
  types: t.Array(typeSchema),
  weight: t.Number,
  status: t.Boolean,
  message: t.String,
});

export type Pokemon = t.Static<typeof PokemonSchema>;

const PokemonListSchema = t.Record({
  count: t.Number,
  next: t.String,
  previous: t.String,
  nextOffset: t.Number,
  prevOffset: t.Number,
  results: t.Array(PokemonItemSchema),
  status: t.Boolean,
  message: t.String,
});

export type PokemonList = t.Static<typeof PokemonListSchema>;
