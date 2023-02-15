import { FunctionComponent, PropsWithChildren } from 'react';

import { YScrollable } from '@/presentational/components/Layout';
import { mainTheme } from '@/presentational/theme';

const tabs: Array<string> = ['About', 'Base Stats', 'Moves'];

type TabContainerProps = {
  primColor: string;
  currentTab: number;
  setCurrentTab: (selectedTab: number) => void;
};

const TabContainer: FunctionComponent<PropsWithChildren<TabContainerProps>> = ({
  children,
  primColor,
  currentTab,
  setCurrentTab,
}) => {
  const ActiveTab = createActiveTab(primColor);

  return (
    <Container>
      <TabHeader>
        {tabs.map((tab, idx) =>
          idx === currentTab ? (
            <ActiveTab key={tab} onClick={() => setCurrentTab(idx)}>
              {tab}
            </ActiveTab>
          ) : (
            <Tab key={tab} onClick={() => setCurrentTab(idx)}>
              {tab}
            </Tab>
          ),
        )}
      </TabHeader>
      <YScrollable>{children}</YScrollable>
    </Container>
  );
};

export default TabContainer;

const Container = mainTheme.styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  backgroundColor: '#f7f7f7',
  color: 'black',
  paddingTop: '20px',
});

const TabHeader = mainTheme.styled('div', {
  display: 'flex',
  paddingBlockStart: '30px',
  paddingInline: '10px',
  cursor: 'pointer',
});

const Tab = mainTheme.styled('div', {
  display: 'flex',
  justifyContent: 'center',
  width: '33%',
  fontSize: '12px',
  padding: '10px',
});

const createActiveTab = (primColor: string) =>
  mainTheme.styled(Tab, {
    borderStyle: 'solid',
    borderColor: primColor,
    borderWidth: '0px 0px 2px 0px',
  });
