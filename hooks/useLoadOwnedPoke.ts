import OwnedPokemon from "@utils/OwnedPokemon";
import { getOwnedPokemonData, saveNewPokemon } from "@utils/session";
import { useEffect, useState } from "react";

const useLoadOwnedPoke = () => {
  const [ownedPokemon, setOwnedPokemon] = useState<any[]>([]);

  const loadOwnedPokemon = () => {
    const sessStorage = getOwnedPokemonData(window);
    let ownedPokemonMem = new OwnedPokemon(sessStorage);

    if (ownedPokemonMem.data) {
      setOwnedPokemon(ownedPokemonMem.data);
    } else {
      setOwnedPokemon([]);
    }
  };

  const savePokemon = (
    id: number,
    pokemonName: string,
    name: string,
  ) => {
    let ownedPokemonMem = new OwnedPokemon(ownedPokemon);
    ownedPokemonMem.addPokemon(id, pokemonName, name);
    saveNewPokemon(window, ownedPokemonMem.data);
    loadOwnedPokemon();
  };

  const releasePokemon = (name: string) => {
    let ownedPokemonMem = new OwnedPokemon(ownedPokemon);
    ownedPokemonMem.releasePokemon(name);
    saveNewPokemon(window, ownedPokemonMem.data);
    loadOwnedPokemon();
  };

  useEffect(() => {
    loadOwnedPokemon();
  }, []);

  return { ownedPokemon, savePokemon, releasePokemon };
};

export default useLoadOwnedPoke;
