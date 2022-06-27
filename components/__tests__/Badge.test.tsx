import Badge from "@components/Badge";
import { render, screen } from "@testing-library/react";

describe("render correctly", () => {
  it("can see badge text", () => {
    render(<Badge totalOwnedPokemon={15} />);
    const totalOwnedPokemon = screen.getByText("15");
    expect(totalOwnedPokemon).toBeTruthy();
  });
});
