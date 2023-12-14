import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../Card';

it('render correctly', () => {
  render(<Card headText="head" bodyText="body" />);
  const head = screen.getByText('head');
  const body = screen.getByText('body');
  expect(head.textContent).toEqual('head');
  expect(body.textContent).toEqual('body');
});
