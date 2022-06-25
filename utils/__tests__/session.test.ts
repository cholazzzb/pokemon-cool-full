import {
  getOwnedPokemonData,
  getTotalPokemon,
  saveNewPokemon,
} from "../../utils/session";

it("getOwnedPokemonData(): should get null from session storage", () => {
  window.sessionStorage.clear();
  const ownedPokemon = getOwnedPokemonData(window);
  expect(ownedPokemon).toBeNull();
});

it("saveNewPokemon(): should get Bulbasaur with attribute name: Mocha", () => {
  window.sessionStorage.clear();
  const newPokemon = {
    data: [{ id: 1, name: "bulbasaur", attributes: [{ name: "Mocha" }] }],
  };
  saveNewPokemon(window, newPokemon);
  const ownedPokemon = getOwnedPokemonData(window);
  expect(ownedPokemon).toMatchObject(newPokemon);
});

it("getTotalPokemon(): should return 0 pokemon", () => {
  const total = getTotalPokemon(null);
  expect(total).toEqual(0);
});

it("getTotalPokemon(): should return 5 pokemons", () => {
  const newPokemon = [
    {
      id: 1,
      name: "bulbasaur",
      attributes: [{ name: "Mocha" }, { name: "Mochi" }],
    },
    {
      id: 4,
      name: "charmander",
      attributes: [{ name: "kadal" }, { name: "cicak" }, { name: "oranye" }],
    },
  ];
  const total = getTotalPokemon(newPokemon);
  expect(total).toEqual(5);
});
