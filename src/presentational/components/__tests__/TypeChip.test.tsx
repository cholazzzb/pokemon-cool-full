import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import TypeChip from '../TypeChip';

it('renders correctly', () => {
  const { queryByTestId } = render(<TypeChip type="normal" />);
  expect(queryByTestId('typechip-label')).toBeTruthy();
});
