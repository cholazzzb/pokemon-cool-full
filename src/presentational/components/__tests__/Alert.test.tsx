import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Alert from '../Alert';

describe('renders correctly', () => {
  it('Close the alert when clicked', () => {
    const screen = render(
      <Alert headText="this is headtext">
        <div>This is children</div>
      </Alert>,
    );
    const closeButton = screen.queryByTestId(
      'alert-close-button',
    ) as HTMLElement;
    expect(closeButton).toBeTruthy();

    fireEvent.click(closeButton);

    const closeButtonAfterClicked = screen.queryByTestId(
      'alert-close-button',
    ) as HTMLElement;
    expect(closeButtonAfterClicked).toBeFalsy();
  });
});
