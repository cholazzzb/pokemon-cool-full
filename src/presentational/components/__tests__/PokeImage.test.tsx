import { render } from '@testing-library/react';
import PokeImage from '../PokeImage';

it('renders correctly', () => {
  const { queryByTestId } = render(
    <PokeImage
      type="grass"
      size={200}
      image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
    />,
  );
  expect(queryByTestId('pokemon-image')).toBeTruthy();
});
