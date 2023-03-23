import { ComponentMeta, ComponentStory } from '@storybook/react';

import FloatingActionButton from '@/presentational/components/FloatingActionButton';

export default {
  title: 'Components/FloatingActionButton',
  component: FloatingActionButton,
  argTypes: {},
} as ComponentMeta<typeof FloatingActionButton>;

const Template: ComponentStory<typeof FloatingActionButton> = (args) => (
  <FloatingActionButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'sm',
};
