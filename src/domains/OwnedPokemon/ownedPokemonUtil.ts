import {
  ERROR_NAME_ALREADY_EXIST,
  ERROR_NAME_NOT_FOUND,
  ERROR_POKEMON_NOT_OWNED,
  Name,
  OwnedPokemons,
  PokemonId,
  PokemonName,
} from './ownedPokemonEntity';

export const checkIfNameAlreadyExist = (
  ownedPokemons: OwnedPokemons,
  name: Name,
): boolean => {
  for (const pokemons of Object.values(ownedPokemons)) {
    if (pokemons.name[name]) {
      return true;
    }
  }
  return false;
};

export const addPokemon = (
  ownedPokemons: OwnedPokemons,
  id: PokemonId,
  pokemonName: PokemonName,
  name: Name,
): {
  error: typeof ERROR_NAME_ALREADY_EXIST | null;
  result: OwnedPokemons;
} => {
  if (checkIfNameAlreadyExist(ownedPokemons, name)) {
    return { error: 'name already exist', result: ownedPokemons };
  }
  if (ownedPokemons[pokemonName]) {
    ownedPokemons[pokemonName].total += 1;
    ownedPokemons[pokemonName].name[name] = true;
    return { error: null, result: ownedPokemons };
  }

  ownedPokemons[pokemonName] = {
    id,
    total: 1,
    name: {
      [name]: true,
    },
  };

  return { error: null, result: ownedPokemons };
};

export const releasePokemon = (
  ownedPokemons: OwnedPokemons,
  pokemonName: PokemonName,
  name: Name,
): {
  error: typeof ERROR_POKEMON_NOT_OWNED | typeof ERROR_NAME_NOT_FOUND | null;
  result: OwnedPokemons;
} => {
  if (!ownedPokemons[pokemonName]) {
    return { error: 'pokemon not owned', result: ownedPokemons };
  }
  if (!ownedPokemons[pokemonName].name[name]) {
    return { error: 'name not found', result: ownedPokemons };
  }

  ownedPokemons[pokemonName].total -= 1;
  delete ownedPokemons[pokemonName].name[name];
  return { error: null, result: ownedPokemons };
};
