import OwnedPokemon from "../OwnedPokemon";

describe("Test constuctor", () => {
  test("", () => {
    let myPokemon = new OwnedPokemon([
      {
        id: 1,
        name: "bulbasaur",
        attributes: [{ name: "BOBI" }],
      },
    ]);
    expect(myPokemon.data).toMatchObject({});
  });
});

describe("Test OwnedPokemon methods", () => {
  describe("checkIfNameAlreadyExist()", () => {
    describe("no data", () => {
      test("should return false (no data)", () => {
        let myPokemon = new OwnedPokemon(null);
        expect(myPokemon.checkIfNameAlreadyExist("BOBI")).toBeFalsy();
      });
    });

    let myPokemon: any;
    beforeEach(() => {
      myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }],
        },
      ]);
    });
    test("should return true", () => {
      expect(myPokemon.checkIfNameAlreadyExist("BOBI")).toBeTruthy();
    });

    test("should return false (no pokemon with that name)", () => {
      expect(myPokemon.checkIfNameAlreadyExist("BOBA")).toBeFalsy();
    });
  });

  describe("checkIfPokemonAlreadyExist()", () => {
    test("should return false (no data)", () => {
      let myPokemon = new OwnedPokemon(null);
      expect(myPokemon.checkIfPokemonAlreadyExist("bulbasaur")).toBeFalsy();
    });

    let myPokemon: any;

    beforeEach(() => {
      myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }],
        },
      ]);
    });

    test("should return true", () => {
      expect(myPokemon.checkIfPokemonAlreadyExist("bulbasaur")).toBeTruthy();
    });
    test("should return false (no pokemon)", () => {
      expect(myPokemon.checkIfPokemonAlreadyExist("charmander")).toBeFalsy();
    });
  });

  describe("addPokemon()", () => {
    test("should add new pokemon (first time)", () => {
      let myPokemon = new OwnedPokemon(null);
      const isSuccess = myPokemon.addPokemon(1, "bulbasaur", "BOBI");
      expect(myPokemon.checkIfNameAlreadyExist("BOBI")).toBeTruthy();
      expect(myPokemon.checkIfPokemonAlreadyExist("bulbasaur")).toBeTruthy();
      expect(isSuccess).toBeTruthy();
    });

    let myPokemon: any;
    beforeEach(() => {
      myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }],
        },
      ]);
    });
    test("should add new pokemon (different pokemon)", () => {
      const isSuccess = myPokemon.addPokemon(4, "charmander", "MONYET");
      expect(myPokemon.checkIfNameAlreadyExist("MONYET")).toBeTruthy();
      expect(myPokemon.checkIfPokemonAlreadyExist("charmander")).toBeTruthy();
      expect(isSuccess).toBeTruthy();
    });
    test("should add new pokemon (same pokemon, different name)", () => {
      myPokemon.addPokemon(4, "charmander", "MONYET");

      const isSuccess = myPokemon.addPokemon(4, "charmander", "MONYET LAGI");
      expect(myPokemon.checkIfNameAlreadyExist("MONYET LAGI")).toBeTruthy();
      expect(myPokemon.checkIfPokemonAlreadyExist("charmander")).toBeTruthy();
      expect(isSuccess).toBeTruthy();
    });
    test("should not add new pokemon (name already exist)", () => {
      myPokemon.addPokemon(4, "charmander", "MONYET");
      myPokemon.addPokemon(4, "charmander", "MONYET LAGI");

      const isSuccess = myPokemon.addPokemon(4, "charmander", "MONYET LAGI");
      expect(isSuccess).toBeFalsy();
    });
  });

  describe("releasePokemon()", () => {
    test("pokemon data reduced (without any same pokemon left)", () => {
      let myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }],
        },
      ]);
      myPokemon.releasePokemon("BOBI");
      expect(myPokemon.data?.length).toEqual(0);
    });

    test("pokemon data reduced (without any same pokemon left)", () => {
      let myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }, { name: "BOBA" }],
        },
        {
          id: 4,
          name: "charmander",
          attributes: [{ name: "MONYET" }],
        },
      ]);
      myPokemon.releasePokemon("MONYET");
      expect(myPokemon.data?.length).toEqual(1);
    });

    test("pokemon data reduced (left the same pokemon)", () => {
      let myPokemon = new OwnedPokemon([
        {
          id: 1,
          name: "bulbasaur",
          attributes: [{ name: "BOBI" }, { name: "BOBA" }],
        },
      ]);
      myPokemon.releasePokemon("BOBI");
      expect(myPokemon.checkIfNameAlreadyExist("BOBA")).toBeTruthy();
      expect(myPokemon.checkIfNameAlreadyExist("BOBI")).toBeFalsy();
    });

    test("nothing happen (pokemon name doesn't exist)", () => {});
    let myPokemon = new OwnedPokemon([
      {
        id: 1,
        name: "bulbasaur",
        attributes: [{ name: "BOBI" }],
      },
    ]);
    myPokemon.releasePokemon("GA ADA");
    expect(myPokemon.checkIfNameAlreadyExist("BOBI")).toBeTruthy();
  });
});
