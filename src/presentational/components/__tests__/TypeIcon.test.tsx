import { render } from '@testing-library/react';
import { expect, it } from 'vitest';

import TypeIcon from '../TypeIcon';

it('render correctly', () => {
  const { queryByTestId } = render(<TypeIcon type="fire" />);
  expect(queryByTestId('typeicon')).toBeTruthy();
});
