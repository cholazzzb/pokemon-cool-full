/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';

const BadgeStyle = css`
  position: absolute;
  right: 0%;
  bottom: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border-radius: 9999px;
  background-color: green;
  color: white;
`;

const Badge: FC = ({ children }) => {
  return <div css={BadgeStyle}>{children}</div>;
};

export default Badge;
