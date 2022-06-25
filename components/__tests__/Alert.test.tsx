import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import Alert from "../Alert";

describe("renderes correctly", () => {
  it("Close Alert", () => {
    render(<Alert headText="this is headtext"><div>This is children</div></Alert>);
    const closeButton = screen.queryByTestId("alert-close-button")

    expect(closeButton).toBeTruthy()
  });
});
