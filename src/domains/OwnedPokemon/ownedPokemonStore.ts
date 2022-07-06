import createHooks from 'zustand';
import createStore from 'zustand/vanilla';
import { persist } from 'zustand/middleware';
import { OwnedPokemons } from './ownedPokemonEntity';

export type OwnedPokemonState = {
  ownedPokemons: OwnedPokemons;
  setOwnedPokemons: (ownedPokemons: OwnedPokemons) => void;
};

const store = createStore<OwnedPokemonState>(
  persist(
    (set, _) => ({
      ownedPokemons: {},
      setOwnedPokemons: (ownedPokemons) =>
        set((state) => ({
          ...state,
          ownedPokemons,
        })),
    }),
    {
      name: 'ownedPokemons',
      getStorage: () => sessionStorage,
    },
  ),
);

export const useOwnedPokemonStore = createHooks(store);
