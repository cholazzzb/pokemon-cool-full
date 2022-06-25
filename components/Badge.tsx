/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

const BadgeStyle = css`
    position: absolute;
    right:0%;
    bottom:50%;
    display:flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    border-radius: 9999px;
    background-color: green;
    color: white;
`;

interface IBadgeProps {
  totalOwnedPokemon: number;
}

const Badge: FC<IBadgeProps> = (props) => {
  const { totalOwnedPokemon } = props;
  return <div css={BadgeStyle}>{totalOwnedPokemon}</div>;
};

export default Badge;
