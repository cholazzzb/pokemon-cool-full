/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

interface ILayoutProps {
  children: any;
}

const Layout: FC<ILayoutProps> = (props) => {
  const LayoutStyle = css`
    position: relative;
    z-index: 0;
    height: 100vh;
    max-width: ${420}px;
    margin: 0 auto;
    border-radius: 20px;
    border: 4px solid #e7e7ef;
  `;

  return <div css={LayoutStyle}>{props.children}</div>;
};

export default Layout;
