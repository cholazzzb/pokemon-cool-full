import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Center } from '@/presentational/components/Layout';
import Text from '@/presentational/components/Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {},
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => (
  <Center css={{ height: 100 }}>
    <Text {...args} />
  </Center>
);
export const H1 = Template.bind({});
H1.args = {
  variant: 'h1',
  children: 'H1 Text',
};

export const H2 = Template.bind({});
H2.args = {
  variant: 'h2',
  children: 'H2 Text',
};

export const H3 = Template.bind({});
H3.args = {
  variant: 'h3',
  children: 'H3 Text',
};

export const H4 = Template.bind({});
H4.args = {
  variant: 'h4',
  children: 'H4 Text',
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: 'body1',
  children: 'Body1 Text',
};
