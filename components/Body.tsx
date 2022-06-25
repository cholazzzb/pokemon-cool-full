/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

const BodyStyle = css`
  width: 100%;
  height: 100%;
`;

interface IBodyProps {
  children?: any;
}
const Body: FC<IBodyProps> = (props) => {
  return <div css={BodyStyle}>{props.children}</div>;
};

export default Body;
