import { ComponentMeta, ComponentStory } from '@storybook/react';

import {
  Body,
  BottomSheet as BottomSheetDefault,
  Layout as LayoutDefault,
  RightPane,
} from '@/presentational/components/Layout';
import { ModalOverlay } from '@/presentational/components/ModalOverlay';

export default {
  title: 'Components/Layout',
  component: LayoutDefault,
  argTypes: {},
} as ComponentMeta<typeof LayoutDefault>;

const Template: ComponentStory<typeof LayoutDefault> = (args) => (
  <LayoutDefault {...args} />
);

export const Layout = Template.bind({});
Layout.args = {};

const BottomSheetTemplate: ComponentStory<typeof BottomSheetDefault> = (
  args,
) => (
  <LayoutDefault>
    <RightPane />
    <Body>
      <div style={{ height: 200 }}>Other Content</div>
      <ModalOverlay
        onClick={() => {
          //
        }}
      >
        <BottomSheetDefault {...args} />;
      </ModalOverlay>
    </Body>
  </LayoutDefault>
);

export const BottomSheet = BottomSheetTemplate.bind({});
BottomSheet.args = {
  style: {
    borderTop: `solid 4px blue`,
  },
  children: <div>BottomSheet Children</div>,
};
