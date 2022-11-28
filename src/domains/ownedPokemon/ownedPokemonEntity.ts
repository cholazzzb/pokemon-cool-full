export type PokemonId = number;
export type PokemonName = string; // Ex: Bulbasaur
export type Name = string; // Ex: Dino

export type OwnedPokemon = {
  id: PokemonId;
  total: number;
  name: Record<Name, true>;
};

export type OwnedPokemons = Record<PokemonName, OwnedPokemon>;

export const ERROR_POKEMON_NOT_OWNED = 'pokemon not owned';
export const ERROR_NAME_ALREADY_EXIST = 'name already exist';
export const ERROR_NAME_NOT_FOUND = 'name not found';
