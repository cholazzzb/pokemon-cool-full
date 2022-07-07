import Alert from '@/components/Alert';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Example1 = Template.bind({});
Example1.args = {
  headText: 'HeadText',
  children: <>This is children</>,
};
