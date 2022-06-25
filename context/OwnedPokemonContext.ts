import { createContext } from "react";

export type OwnedPokemonContextType = {
  ownedPokemon: any[];
  savePokemon: (
    id: number,
    pokemonName: string,
    name: string,
  ) => void;
  releasePokemon: (name: string) => void;
};

export const OwnedPokemonContext = createContext({} as OwnedPokemonContextType);
