import Dialog from '@/components/Dialog';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => <Dialog {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  headerText: 'Header Text',
  onClose: () => {},
  children: <>This is children</>,
};
