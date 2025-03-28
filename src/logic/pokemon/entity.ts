import { createPokemonTypeBgColor } from '@/shared-ui/config/color';

export type PokemonType = keyof ReturnType<typeof createPokemonTypeBgColor>;
export const pokemonTypes: Array<PokemonType> = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];
