import { createPokemonTypeBgColor } from '@/shared-ui/config/color';

export type PokemonType = keyof ReturnType<typeof createPokemonTypeBgColor>;
export const pokemonTypes: Array<PokemonType> = [
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'steel',
  'fire',
  'water',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
];
