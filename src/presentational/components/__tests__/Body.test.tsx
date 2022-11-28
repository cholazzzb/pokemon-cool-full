import { render, screen } from '@testing-library/react';
import Body from '../Body';

it("should render body's children", () => {
  render(<Body>children</Body>);
  const text = screen.getByText('children');
  expect(text.textContent).toEqual('children');
});
