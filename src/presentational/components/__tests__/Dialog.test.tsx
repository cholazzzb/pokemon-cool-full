import { render, screen } from '@testing-library/react';
import Dialog from '../Dialog';

describe('renders correctly', () => {
  it('Render close button', () => {
    render(
      <Dialog headerText="this is header text" onClose={() => {}}>
        <div>This is children</div>
      </Dialog>,
    );
    const closeButton = screen.queryByTestId('dialog-close-button');

    expect(closeButton).toBeTruthy();
  });
});
