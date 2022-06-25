/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Dispatch, FC, SetStateAction } from "react";

const TabContainerStyle = css`
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f7f7f7;
  color: black;
  padding-top: 20px;
  padding-bottom: 300px;
`;

const TabHeaderStyle = css`
  display: flex;
  padding: 30px;
`;

const TabStyle = css`
  display: flex;
  justify-content: center;
  width: 33%;
  font-size: 12px;
  padding: 10px;
  overflow: auto;
`;

const TabBodyStyle = css`
  height: 100%;
  overflow: auto;
`;

const tabs: string[] = ["About", "Base Stats", "Moves"];

interface TabContainerProps {
  children: any;
  primColor: string;
  currentTab: number;
  setCurrentTab: Dispatch<SetStateAction<number>>;
}

const TabContainer: FC<TabContainerProps> = (props) => {
  const ActiveTabStyle = css`
    border-style: solid;
    border-color: #aeb5d2;
    border-width: 0px 0px 2px 0px;
    border-radius: 20px;
    background-color: ${props.primColor};
  `;
  return (
    <div css={TabContainerStyle}>
      <div css={TabHeaderStyle}>
        {tabs.map((tab, idx) => (
          <div
            css={
              idx === props.currentTab ? [ActiveTabStyle, TabStyle] : TabStyle
            }
            key={tab}
            onClick={() => props.setCurrentTab(idx)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div css={TabBodyStyle}>{props.children}</div>
    </div>
  );
};

export default TabContainer;
