import React from 'react';
import { render } from '@testing-library/react';
import TypeChip from '../../components/TypeChip';

it('renders correctly', () => {
  const { queryByTestId } = render(<TypeChip type="normal" />);
  expect(queryByTestId('typechip-label')).toBeTruthy();
});
