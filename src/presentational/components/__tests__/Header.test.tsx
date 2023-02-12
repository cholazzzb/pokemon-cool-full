import { render } from '@testing-library/react';
import Header from '../Header';

describe('renders correctly', () => {
  it('caption', () => {
    const { queryByTestId } = render(<Header caption="normal" />);
    expect(queryByTestId('header-label')).toBeTruthy();
  });

  it('children', () => {
    const { queryByTestId } = render(
      <Header caption="normal">
        <div>children</div>
      </Header>,
    );
    expect(queryByTestId('header-children-label')).toBeTruthy();
  });

  it('backIcon with callback', () => {
    const { queryByTestId } = render(
      <Header caption="normal" onClickBack={() => {}} />,
    );
    expect(queryByTestId('header-backicon')).toBeTruthy();
  });

  it('backIcon with link', () => {
    const { queryByTestId } = render(
      <Header caption="normal" onClickBackLink="/" />,
    );
    expect(queryByTestId('header-backicon')).toBeTruthy();
  });
});
