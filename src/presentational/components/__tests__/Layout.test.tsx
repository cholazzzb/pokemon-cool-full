import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import { Layout } from '../Layout';

it('render correctly', () => {
  render(<Layout>children</Layout>);
  const children = screen.getByText('children');
  expect(children.textContent).toEqual('children');
});
