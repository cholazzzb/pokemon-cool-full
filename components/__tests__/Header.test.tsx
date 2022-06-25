import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../Header";

describe("renders correctly", () => {
  it("caption", () => {
    const { queryByTestId } = render(<Header caption="normal" />);
    expect(queryByTestId("header-label")).toBeTruthy();
  });

  it("children", () => {
    const { queryByTestId } = render(
      <Header caption="normal" children={<div>children</div>} />
    );
    expect(queryByTestId("header-children-label")).toBeTruthy();
  });

  it("backIcon", () => {
    const { queryByTestId } = render(
      <Header caption="normal" onBack={() => {}} />
    );
    expect(queryByTestId("header-backicon")).toBeTruthy();
  });
});
