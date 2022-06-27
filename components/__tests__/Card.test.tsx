import Card from "@components/Card";
import { render, screen } from "@testing-library/react";

it("render correctly", () => {
  render(<Card headText="head" bodyText="body" />);
  const head = screen.getByText("head");
  const body = screen.getByText("body");
  expect(head.textContent).toEqual("head");
  expect(body.textContent).toEqual("body");
});
