/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { FunctionComponent } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #f7f7f7;
  color: black;
  padding-top: 20px;
`;

const TabHeader = styled.div`
  display: flex;
  padding: 30px;
  cursor: pointer;
`;

const TabStyle = css`
  display: flex;
  justify-content: center;
  width: 33%;
  font-size: 12px;
  padding: 10px;
`;

const TabBody = styled.div`
  height: 100%;
`;

const tabs: Array<string> = ['About', 'Base Stats', 'Moves'];

type TabContainerProps = {
  primColor: string;
  currentTab: number;
  setCurrentTab: (selectedTab: number) => void;
};

const TabContainer: FunctionComponent<TabContainerProps> = ({
  children,
  primColor,
  currentTab,
  setCurrentTab,
}) => {
  const ActiveTabStyle = css`
    border-style: solid;
    border-color: #aeb5d2;
    border-width: 0px 0px 2px 0px;
    border-radius: 20px;
    background-color: ${primColor};
  `;
  return (
    <Container>
      <TabHeader>
        {tabs.map((tab, idx) => (
          <div
            css={idx === currentTab ? [ActiveTabStyle, TabStyle] : TabStyle}
            key={tab}
            onClick={() => setCurrentTab(idx)}
          >
            {tab}
          </div>
        ))}
      </TabHeader>
      <TabBody>{children}</TabBody>
    </Container>
  );
};

export default TabContainer;
