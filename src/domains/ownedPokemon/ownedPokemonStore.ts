import createHooks from 'zustand';
import { persist } from 'zustand/middleware';
import createStore from 'zustand/vanilla';
import { Name, OwnedPokemons, PokemonName } from './ownedPokemonEntity';
import { releasePokemon } from './ownedPokemonUtil';

export type OwnedPokemonState = {
  ownedPokemons: OwnedPokemons;
  setOwnedPokemons: (ownedPokemons: OwnedPokemons) => void;
  releasePokemonByName: (pokemon: string, pokemonName: string) => void;
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
      releasePokemonByName: (pokemonName: PokemonName, name: Name) => {
        set((state) => {
          const ownedPokemons = { ...state.ownedPokemons };

          const releaseRespond = releasePokemon(
            ownedPokemons,
            pokemonName,
            name,
          );

          if (releaseRespond.error) {
            return { ownedPokemons };
          }

          return { ownedPokemons: releaseRespond.result };
        });
      },
    }),
    {
      name: 'ownedPokemons',
      getStorage: () => localStorage,
    },
  ),
);

export const useOwnedPokemonStore = createHooks(store);
