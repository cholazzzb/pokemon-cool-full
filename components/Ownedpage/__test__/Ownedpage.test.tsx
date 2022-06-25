import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Ownedpage from "../Ownedpage";
import OwnedPokemon from "@utils/OwnedPokemon";
import { saveNewPokemon } from "@utils/session";

const mockSetCurrentPage = jest.fn();
const mockSetCurrentName = jest.fn();

describe("Ownedpage", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    let myPokemon = new OwnedPokemon([
      { id: 1, name: "bulbasaur", attributes: [{ name: "BOBI" }] },
    ]);
    saveNewPokemon(window, myPokemon);
  });
  it("renders correctly", () => {
    render(<Ownedpage />);

    const headerText = screen.getByText(/you don't have any pokemon yet/i);
    expect(headerText).toBeInTheDocument();
  });
});
