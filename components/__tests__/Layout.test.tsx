import Layout from '@components/Layout';
import { render, screen } from '@testing-library/react';

it('render correctly', () => {
  render(<Layout>children</Layout>);
  const children = screen.getByText('children');
  expect(children.textContent).toEqual('children');
});
