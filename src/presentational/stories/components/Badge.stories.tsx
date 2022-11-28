import { ComponentMeta, ComponentStory } from '@storybook/react';
import Badge from 'src/presentational/components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Ten = Template.bind({});
Ten.args = {
  children: 10,
};
