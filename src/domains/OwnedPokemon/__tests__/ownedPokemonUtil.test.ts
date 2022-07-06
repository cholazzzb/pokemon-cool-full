import { OwnedPokemons } from '../ownedPokemonEntity';
import {
  addPokemon,
  checkIfNameAlreadyExist,
  releasePokemon,
} from '../ownedPokemonUtil';

describe('checkIfNameAlreadyExist', () => {
  it('should return true', () => {
    const ownedPokemon: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          dino: true,
        },
      },
    };
    expect(checkIfNameAlreadyExist(ownedPokemon, 'dino')).toBeTruthy();
  });

  it('should return false', () => {
    const ownedPokemon: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          b: true,
        },
      },
    };
    expect(checkIfNameAlreadyExist(ownedPokemon, 'a')).toBeFalsy();
  });
});

describe('addPokemon', () => {
  it('add pokemon with existing name should return error', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 2,
        name: {
          a: true,
          b: true,
        },
      },
    };
    const { error, result } = addPokemon(ownedPokemons, 1, 'bulbasaur', 'a');
    expect(error).toBe('name already exist');
    expect(result).toEqual<OwnedPokemons>(ownedPokemons);
  });

  it('add existing pokemon with other name', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          a: true,
        },
      },
    };

    const { error, result } = addPokemon(ownedPokemons, 1, 'bulbasaur', 'b');
    expect(error).toBeNull();
    expect(result).toEqual<OwnedPokemons>({
      bulbasaur: {
        id: 1,
        total: 2,
        name: {
          a: true,
          b: true,
        },
      },
    });
  });

  it('add new pokemon', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          a: true,
        },
      },
    };

    const { error, result } = addPokemon(ownedPokemons, 2, 'charmander', 'b');
    expect(error).toBeNull();
    expect(result).toEqual<OwnedPokemons>({
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          a: true,
        },
      },
      charmander: {
        id: 2,
        total: 1,
        name: {
          b: true,
        },
      },
    });
  });
});

describe('releasePokemon', () => {
  it('release not owned pokemon should return error', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 2,
        name: {
          a: true,
          b: true,
        },
      },
    };
    const { error, result } = releasePokemon(ownedPokemons, 'charmander', 'b');
    expect(error).toBe('pokemon not owned');
    expect(result).toEqual(ownedPokemons);
  });

  it('release pokemon with wrong name should return error', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 2,
        name: {
          a: true,
          b: true,
        },
      },
    };
    const { error, result } = releasePokemon(ownedPokemons, 'bulbasaur', 'c');
    expect(error).toBe('name not found');
    expect(result).toEqual(ownedPokemons);
  });

  it('release bulbasaur with name a', () => {
    const ownedPokemons: OwnedPokemons = {
      bulbasaur: {
        id: 1,
        total: 2,
        name: {
          a: true,
          b: true,
        },
      },
    };
    const { error, result } = releasePokemon(ownedPokemons, 'bulbasaur', 'a');
    expect(error).toBeNull();
    expect(result).toEqual<OwnedPokemons>({
      bulbasaur: {
        id: 1,
        total: 1,
        name: {
          b: true,
        },
      },
    });
  });
});
