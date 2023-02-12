import { render } from '@testing-library/react';
import TypeChip from '../TypeChip';

it('renders correctly', () => {
  const { queryByTestId } = render(<TypeChip type="normal" />);
  expect(queryByTestId('typechip-label')).toBeTruthy();
});
