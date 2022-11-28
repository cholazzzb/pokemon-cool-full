import { render, screen } from '@testing-library/react';
import Badge from '../Badge';

describe('render correctly', () => {
  it('can see badge text', () => {
    render(<Badge>15</Badge>);
    const totalOwnedPokemon = screen.getByText('15');
    expect(totalOwnedPokemon).toBeTruthy();
  });
});
