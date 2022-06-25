import { IOwnedPokemon } from "./OwnedPokemon";

export const getOwnedPokemonData = (window: any) => {
  const ownedPokemonStr = window.sessionStorage.getItem("ownedPokemon");
  if (ownedPokemonStr) {
    const ownedPokemon = JSON.parse(ownedPokemonStr);
    return ownedPokemon;
  } else {
    return null;
  }
};

export const saveNewPokemon = (window: any, newPokemon: any) => {
  window.sessionStorage.setItem("ownedPokemon", JSON.stringify(newPokemon));
};

export const getTotalPokemon = (ownedPokemon: IOwnedPokemon[] | null) => {
  let total = 0;
  if (ownedPokemon) {
    ownedPokemon.forEach((pokemon: IOwnedPokemon) => {
      pokemon.attributes.forEach((attr) => total++);
    });
  }
  return total;
};
