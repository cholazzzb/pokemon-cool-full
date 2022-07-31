/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';

const LayoutStyle = css`
  height: 100vh;
  max-width: ${420}px;
  margin: 0 auto;
  border-radius: 20px;
  border: 4px solid #e7e7ef;
  display: flex;
  flex-direction: column;
`;

const Layout: FunctionComponent = ({ children }) => {
  return <div css={LayoutStyle}>{children}</div>;
};

export default Layout;
