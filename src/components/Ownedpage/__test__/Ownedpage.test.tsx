import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Ownedpage from '../Ownedpage';

describe('Ownedpage', () => {
  it('renders correctly', () => {
    render(<Ownedpage />);

    const headerText = screen.getByText(/you don't have any pokemon yet/i);
    expect(headerText).toBeInTheDocument();
  });
});
