/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FunctionComponent } from 'react';

const BodyStyle = css`
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
`;

const Body: FunctionComponent = ({ children }) => {
  return <div css={BodyStyle}>{children}</div>;
};

export default Body;
