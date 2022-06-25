export interface IOwnedPokemon {
  id: number;
  name: string;
  attributes: {
    name: string;
  }[];
}

class OwnedPokemon {
  private _data: IOwnedPokemon[] | null = null;

  constructor(data: IOwnedPokemon[] | null) {
    this._data = data;
  }

  get data() {
    return this._data;
  }

  checkIfNameAlreadyExist(name: string): boolean {
    if (JSON.stringify(this._data).includes(name)) {
      return true;
    }
    return false;
  }

  checkIfPokemonAlreadyExist(pokemon: string): boolean {
    if (JSON.stringify(this._data).includes(pokemon)) {
      return true;
    }
    return false;
  }

  addPokemon(
    id: number,
    pokemonName: string,
    name: string,
  ): boolean {
    if (this.checkIfNameAlreadyExist(name)) {
      return false;
    }
    if (this._data) {
      if (this.checkIfPokemonAlreadyExist(pokemonName)) {
        let pokemonIdx: any = this._data.findIndex(
          (pokemon) => pokemon.name === pokemonName
        );
        this._data[pokemonIdx].attributes.push({
          name: name,
        });
      } else {
        this._data.push({
          id: id,
          name: pokemonName,
          attributes: [{ name: name }],
        });
      }
    } else {
      this._data = [
        {
          id: id,
          name: pokemonName,
          attributes: [{ name: name }],
        },
      ];
    }

    return true;
  }

  releasePokemon(name: string) {
    const nameExist = this.checkIfNameAlreadyExist(name);
    let pokemonIdx: number = 0;
    let nameIdx: number = 0;

    if (nameExist && this._data) {
      this._data.some((pokemon, pokeIdx) =>
        pokemon.attributes.some((attri: any, attriIdx: any) => {
          if (attri.name === name) {
            pokemonIdx = pokeIdx;
            nameIdx = attriIdx;
            return true;
          }
        })
      );
      if (this._data[pokemonIdx].attributes.length > 1) {
        this._data[pokemonIdx].attributes.splice(nameIdx, 1);
      } else {
        this._data.splice(pokemonIdx, 1);
      }
    }
  }
}

export default OwnedPokemon;
