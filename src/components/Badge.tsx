/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { FC } from 'react';

type BadgeProps = {
  top?: number;
  right?: number;
};

const Badge: FC<BadgeProps> = ({ top = 0, right = 0, children }) => {
  const BadgeStyle = css`
    position: absolute;
    top: ${top}px;
    right: ${right}px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 9999px;
    background-color: green;
    color: white;
  `;
  return <div css={BadgeStyle}>{children}</div>;
};

export default Badge;
