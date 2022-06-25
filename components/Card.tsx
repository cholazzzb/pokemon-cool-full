/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

const CardStyle = css`
  text-transform: capitalize;
  padding: 10px 0px;
`;

const CardHeaderStyle = css`
  font-size: 25px;
  font-weight: 900;
`;

const CardBodyStyle = css`
  font-size: 20px;
`;

interface ICard {
  headText: string;
  bodyText: string;
}

const Card: FC<ICard> = (props) => {
  return (
    <div css={CardStyle}>
      <div css={CardHeaderStyle}>{props.headText}</div>
      <div css={CardBodyStyle}>{props.bodyText}</div>
    </div>
  );
};

export default Card;
