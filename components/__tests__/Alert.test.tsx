import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Alert from '../Alert';

describe('renders correctly', () => {
  it('Close Alert', () => {
    render(
      <Alert headText="this is headtext">
        <div>This is children</div>
      </Alert>,
    );
    const closeButton = screen.queryByTestId('alert-close-button');

    expect(closeButton).toBeTruthy();
  });
});

describe('onfire', () => {
  it('Close the alert when clicked', () => {
    render(
      <Alert headText="this is headtext">
        <div>This is children</div>
      </Alert>,
    );
    const closeButton = screen.queryByTestId(
      'alert-close-button',
    ) as HTMLElement;
    fireEvent.click(closeButton);

    const closeButtonAfterClicked = screen.queryByTestId(
      'alert-close-button',
    ) as HTMLElement;
    expect(closeButtonAfterClicked).toBeFalsy();
  });
});
